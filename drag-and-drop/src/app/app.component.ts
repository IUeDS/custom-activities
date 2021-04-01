import { Component, OnInit } from '@angular/core';
import {transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-and-drop';
  currentQuestion = null;
  DRAG_TYPE = 'DRAGGABLE';
  DROP_TYPE = 'DROPPABLE';
  IMAGE_TYPE = 'IMAGE'; //the base image
  OPTION_LIST_DROP_LIST_ID='OPTION_LIST'; //to identify the option container when a placed option is dragged back
  image = null;
  draggables = [];
  droppables = [];
  dragListHighlighted = false;
  feedbackVisible = false;
  isCorrect = true;

  ngOnInit() {
    //this is where we would load in data from the QC API when fully integrated; mocking up for now
    //option model:
    //{id: , type: , count: , width: , height: , imgUrl: , left: , top: , answer_id:  }
    this.currentQuestion = {
      question_text: 'Draw the structure of ⍺-D-Glucopyranose.',
      options: [
        {id: 9, type: "IMAGE", count: 1, width: 278, height: 258, imgUrl: './assets/q1-base.png', left: null, top: null, answer_id: null },
        {id: 1, type: "DRAGGABLE", count: 1, width: 48, height: 100, imgUrl: './assets/q1-option1.png', left: null, top: null, answer_id: null },
        {id: 2, type: "DRAGGABLE", count: 3, width: 46, height: 100, imgUrl: './assets/q1-option2.png', left: null, top: null, answer_id: null },
        {id: 5, type: "DRAGGABLE", count: 1, width: 143, height: 100, imgUrl: './assets/q1-option3-resized2.png', left: null, top: null, answer_id: null },
        {id: 3, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 80, top: 25, answer_id: 5 },
        {id: 4, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 20, top: 130, answer_id: 2 },
        {id: 6, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 86, top: 238, answer_id: 1 }, 
        {id: 7, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 212, top: 238, answer_id: 2 }, 
        {id: 8, type: "DROPPABLE", count: 1, width: 80, height: 120, imgUrl: null, left: 275, top: 130, answer_id: 2 }
      ]
    };
    //original image/dimensions for option 3, which is the tricky one, if we decide to go back to the original:
    //{id: 5, type: "DRAGGABLE", count: 1, width: 96, height: 100, imgUrl: './assets/q1-option3.png', answer_id: null }

    this.initOptions();
  }

  initOptions() {
    //sort into base image, draggables, and droppables, and add object attributes that we use
    //on the front-end for interaction but that aren't in the database model
    for (let option of this.currentQuestion.options) {
      if (option.type === this.IMAGE_TYPE) {
        this.image = option;
      }

      if (option.type === this.DROP_TYPE) {
        option.disabled = false;
        option.entered = false;
        option[this.DRAG_TYPE] = [];
        this.droppables.push(option);
      }

      if (option.type === this.DRAG_TYPE) {
        option.disabled = false;
        option[this.DROP_TYPE] = null;
        this.draggables.push(option);
      }
    }

    //duplicate draggables with multiple counts
    for (let i = 0; i < this.draggables.length; i++) {
      const draggable = this.draggables[i];
      if (draggable.count > 1) {
        for (let j = 0; j < draggable.count - 1; j++) {
          const clone = JSON.parse(JSON.stringify(draggable));
          this.draggables.splice(i, 0, clone);
          i += (draggable.count - 1); //increment counter so we don't loop over those we just added
        }
      }
    }
  }

  getDroppableLeftPosition(droppable) {
    //for droppable zone, position to make it a bounding box, but for a draggable that's been placed, snap to center
    if (droppable.type === this.DROP_TYPE) {
      return droppable.left - (droppable.width / 2); 
    }
    
    //favoring CSS centering over this for now for dropped options, but keeping in case there are issues
    //return droppable[this.DROP_TYPE].left - (droppable.width / 2);
  }

  getDroppableTopPosition(droppable) {
    //for droppable zone, position to make it a bounding box, but for a draggable that's been placed, snap to center
    if (droppable.type === this.DROP_TYPE) {
      return droppable.top - (droppable.height / 2);
    }

    //favoring CSS centering over this for now for dropped options, but keeping in case there are issues
    //return droppable[this.DROP_TYPE].top - (droppable.height / 2);
  }

  dropOutsideOfAnswer(event) {
    if (!event.isPointerOverContainer) {
      return false;
    }

    //do nothing if they dragged and dropped onto the same spot
    if (event.previousContainer === event.container) {
      this.dragListHighlighted = false;
      return false;
    }

    //transfer from droppable area back to the option list
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

    //remove any previously linked data and styling
    const droppedOption = event.container.data[event.currentIndex];
    this.resetAnswerData(droppedOption);
    this.dragListHighlighted = false;

    //re-sort to make sure options are grouped together by duplicates and in original positions
    this.sortOptions();
  }

  //as draggable items are dragged onto the droppable zones, they technically get
  //converted into droppables; make sure the original list remains intact
  getDroppables() {
    return this.droppables.filter(droppable => {
      return droppable.type === this.DROP_TYPE;
    })
  }

  sortOptions() {
    this.draggables.sort((a, b) => {
      if (a.id < b.id) {
        return -1
      }

      if (a.id > b.id) {
        return 1;
      }

      return 0;
    });
  }

  dropOntoAnswer(event) {
    if (!event.isPointerOverContainer) {
      return false;
    }

    //do nothing if they dragged and dropped onto the same spot
    if (event.previousContainer === event.container) {
      return false;
    }

    const droppableId = event.container.id;
    const droppableArea = this.getDroppableById(droppableId);

    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

    const droppedOption = event.container.data[event.currentIndex];

    //reset linked data if it was used as an answer previously and dropped somewhere else
    this.resetAnswerData(droppedOption);

    //if moving onto a spot where an option has already been placed 
    if (droppableArea[this.DRAG_TYPE].length > 1) {
      let transferOptionIndex = null;
      let transferDropOption = null;

      for (let [index, option] of droppableArea[this.DRAG_TYPE].entries()) {
        //grab the option that was originally in this position to swap to the other spot;
        //had to add a bit of logic here for the edge case where maybe it's the same option ID
        //but the count is > 1 so they are separate on the page; generally imagine they'll be different!
        if (option.id != droppedOption.id || (option.id === droppedOption.id && option.count > 1)) {
          transferOptionIndex = index;
          transferDropOption = option;
        }
      }

      const previousDroppableId = event.previousContainer.id;
      const previousDroppableArea = this.getDroppableById(previousDroppableId);
      //if swapping between two droppable zones
      if (previousDroppableArea) {
        previousDroppableArea[this.DRAG_TYPE].push(transferDropOption);
        previousDroppableArea.disabled = true;
      }
      //if swapping betwen a droppable zone and the original option list
      else {
        transferArrayItem(event.container.data,
          event.previousContainer.data,
          transferOptionIndex,
          event.previousIndex);
        this.sortOptions();
      }
      
      transferDropOption[this.DROP_TYPE] = previousDroppableArea;
      //transferDropOption.disabled = true;
    }

    //prevent user from dropping multiple options onto the same area
    droppableArea.disabled = true;
    //droppedOption.disabled = true;

    //link both options together and make data available for position calculations to snap to place, etc.
    //droppableArea[this.DRAG_TYPE] = [ droppedOption ];
    droppableArea[this.DRAG_TYPE].push(droppedOption);
    droppedOption[this.DROP_TYPE] = droppableArea;

    //remove drag-enter styling
    droppableArea.entered = false;
  }

  getDraggableById(id) {
    for (const draggable of this.draggables) {
      if (draggable.id == id) {
        return draggable;
      }
    }

    return null;
  }

  getDroppableById(id) {
    for (const droppable of this.droppables) {
      if (droppable.id == id) {
        return droppable;
      }
    }

    return null;
  }

  resetAnswerData(droppedOption) {
    //if user switched answers, remove linked data from the previous drop area;
    //on the user's initial drop from the option list, this data will not be present
    const previousDroppableArea = droppedOption[this.DROP_TYPE];
    if (previousDroppableArea) {
      const droppableArea = this.getDroppableById(previousDroppableArea.id);
      droppableArea.disabled = false;
      droppableArea[this.DRAG_TYPE] = [];
    }
    
    droppedOption.disabled = false;
    droppedOption[this.DROP_TYPE] = null;
  }

  //if a user has already dragged an answer and wants to drag it back to the
  //option list, don't highlight the area until it has been entered by the
  //draggable; unlike moving from the option list to the droppable zones,
  //we don't want to style the area and hint the user as soon as they start
  //dragging because they are more likely to drag to a different droppable,
  //but we do want to hint that moving it back to the option list is a possibility
  optionListDragEntered(event) {
    this.dragListHighlighted = true;
  }

  optionListDragExited(event) {
    this.dragListHighlighted = false;
  }

  droppableEntered(event) {
    const droppableId = event.container.id;
    const droppableArea = this.getDroppableById(droppableId);
    if (droppableArea.disabled) {
      return false;
    }

    droppableArea.entered = true;
  }

  droppableExited(event) {
    const droppableId = event.container.id;
    const droppableArea = this.getDroppableById(droppableId);
    if (droppableArea.disabled) {
      return false;
    }

    droppableArea.entered = false;
  }

  isSubmitDisabled() {
    if (this.draggables.length || this.feedbackVisible) {
      return true;
    }

    return false;
  }

  submitAnswer() {
    for (let droppable of this.droppables) {
      if (droppable[this.DRAG_TYPE][0].id != droppable.answer_id) {
        droppable.incorrect = true;
        this.isCorrect = false;
      }
    }

    this.feedbackVisible = true;
  }

  restart() {
    //hard page refresh to ensure a new attempt is created
    window.location.reload();
  }
}
