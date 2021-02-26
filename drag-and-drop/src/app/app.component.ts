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
  baseImageUrl = './assets/q1-base.png';
  draggables = [
    {id: 1, type: "DRAGGABLE", count: 1, width: 34, height: 70, imgUrl: './assets/q1-option1.png', disabled: false, DROPPABLE: null },
    {id: 2, type: "DRAGGABLE", count: 3, width: 32, height: 70, imgUrl: './assets/q1-option2.png', disabled: false, DROPPABLE: null },
    {id: 5, type: "DRAGGABLE", count: 1, width: 67, height: 70, imgUrl: './assets/q1-option3.png', disabled: false, DROPPABLE: null }
  ];
  droppables = [
    {id: 3, type: "DROPPABLE", x: 40, y: 15, top: -5, left: 20, width: 40, height: 40, disabled: false, DRAGGABLE: null},
    {id: 4, type: "DROPPABLE", x: 10, y: 65, top: 45, left: -10, width: 40, height: 40, disabled: false, DRAGGABLE: null}
  ];

  ngOnInit() {

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

  dropOutsideOfAnswer(event: CdkDragDrop<string[]>) {
    if (!event.isPointerOverContainer) {
      return false;
    }
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

    //don't allow multiple options to be dragged onto the same area
    if (droppableArea[this.DRAG_TYPE]) {
      console.log(droppableArea);
      return false;
    }

    //transfer from draggable container list to the new droppable container
    transferArrayItem(event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex);
    
    //pin to appropriate center point for droppable zone
    const droppedOption = event.container.data[event.currentIndex];
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
}
