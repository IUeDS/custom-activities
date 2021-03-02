import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, DragRef, moveItemInArray, Point, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drag-and-drop';
  DRAG_TYPE = 'DRAGGABLE';
  DROP_TYPE = 'DROPPABLE';
  OPTION_LIST_DROP_LIST_ID='OPTION_LIST'; //to identify the option container when a placed option is dragged back
  baseImageUrl = '';
  draggables = [];
  droppables = [];
  question_text = '';
  dragListHighlighted = false;

  ngOnInit() {
    //this is where we would load in data from the QC API when fully integrated; mocking up for now
    this.baseImageUrl = './assets/q1-base.png';
    this.draggables = [
      {id: 1, type: "DRAGGABLE", count: 1, width: 34, height: 70, imgUrl: './assets/q1-option1.png', disabled: false, DROPPABLE: null },
      {id: 2, type: "DRAGGABLE", count: 3, width: 32, height: 70, imgUrl: './assets/q1-option2.png', disabled: false, DROPPABLE: null },
      {id: 5, type: "DRAGGABLE", count: 1, width: 67, height: 70, imgUrl: './assets/q1-option3.png', disabled: false, DROPPABLE: null }
    ];
    this.droppables = [
      {id: 3, type: "DROPPABLE", x: 40, y: 15, top: -5, left: 20, width: 40, height: 40, disabled: false, DRAGGABLE: null},
      {id: 4, type: "DROPPABLE", x: 10, y: 65, top: 45, left: -10, width: 40, height: 40, disabled: false, DRAGGABLE: null}
    ];
    this.question_text = 'Draw the structure of ⍺-D-Glucopyranose.';

    //duplicate those with multiple counts
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
      return droppable.x - (droppable.width / 2); 
    }
     
    return droppable[this.DROP_TYPE].x - (droppable.width / 2);
  }

  getDroppableTopPosition(droppable) {
    //for droppable zone, position to make it a bounding box, but for a draggable that's been placed, snap to center
    if (droppable.type === this.DROP_TYPE) {
      return droppable.y - (droppable.height / 2);
    }

    return droppable[this.DROP_TYPE].y - (droppable.height / 2);
  }

  dropOutsideOfAnswer(event) {
    if (!event.isPointerOverContainer) {
      return false;
    }

    //do nothing if they dragged and dropped onto the same spot
    if (event.previousContainer === event.container) {
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
  }

  dropOntoAnswer(event) {
    console.log(event);
    if (!event.isPointerOverContainer) {
      return false;
    }

    //do nothing if they dragged and dropped onto the same spot
    if (event.previousContainer === event.container) {
      return false;
    }

    const droppableId = event.container.id;
    const droppableArea = this.getDroppableById(droppableId);

    //don't allow multiple options to be dragged onto the same area
    if (droppableArea[this.DRAG_TYPE]) {
      return false;
    }

    //transfer from draggable container list to the new droppable container
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);

    //reset linked data if it was used as an answer previously and dropped somewhere else
    const droppedOption = event.container.data[event.currentIndex];
    this.resetAnswerData(droppedOption);

    //pin to appropriate center point for droppable zone
    droppedOption.top = droppableArea.y;
    droppedOption.left = droppableArea.x;

    //prevent user from dropping multiple options onto the same area
    droppableArea.disabled = true;
    droppedOption.disabled = true;

    //link both options together and make data available for position calculations to snap to place, etc.
    droppableArea[this.DRAG_TYPE] = droppedOption;
    droppedOption[this.DROP_TYPE] = droppableArea;
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
    // console.log('droppableArea', droppableArea);
    // console.log('droppedOption', droppedOption);
    //if user switched answers, remove linked data from the previous drop area;
    //on the user's initial drop from the option list, this data will not be present
    const previousDroppableArea = droppedOption[this.DROP_TYPE];
    if (previousDroppableArea) {
      previousDroppableArea.disabled = false;
      previousDroppableArea[this.DRAG_TYPE] = null;
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
}
