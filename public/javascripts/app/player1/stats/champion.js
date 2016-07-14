"use strict";
var Champion = (function () {
    function Champion(playerClass, hitpoints, currentHitpoints, physicalAttack, physicalDefense, specialAttack, specialDefense, dexterity, action) {
        this.playerClass = playerClass;
        this.hitpoints = hitpoints;
        this.currentHitpoints = currentHitpoints;
        this.physicalAttack = physicalAttack;
        this.physicalDefense = physicalDefense;
        this.specialAttack = specialAttack;
        this.specialDefense = specialDefense;
        this.dexterity = dexterity;
        this.action = action;
    }
    return Champion;
}());
exports.Champion = Champion;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcjEvc3RhdHMvY2hhbXBpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBV0ksa0JBQWEsV0FBa0IsRUFBQyxTQUFpQixFQUFDLGdCQUF3QixFQUFDLGNBQXNCLEVBQUMsZUFBdUIsRUFBQyxhQUFxQixFQUFDLGNBQXNCLEVBQUMsU0FBaUIsRUFBQyxNQUFjO1FBQ25NLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN6QixDQUFDO0lBQ0wsZUFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0QlksZ0JBQVEsV0FzQnBCLENBQUEiLCJmaWxlIjoicGxheWVyMS9zdGF0cy9jaGFtcGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDaGFtcGlvbiB7XHJcbiAgICBwbGF5ZXJDbGFzczogc3RyaW5nO1xyXG4gICAgaGl0cG9pbnRzOiBudW1iZXI7XHJcbiAgICBjdXJyZW50SGl0cG9pbnRzOiBudW1iZXI7XHJcbiAgICBwaHlzaWNhbEF0dGFjazogbnVtYmVyO1xyXG4gICAgcGh5c2ljYWxEZWZlbnNlOiBudW1iZXI7XHJcbiAgICBzcGVjaWFsQXR0YWNrOiBudW1iZXI7XHJcbiAgICBzcGVjaWFsRGVmZW5zZTogbnVtYmVyO1xyXG4gICAgZGV4dGVyaXR5OiBudW1iZXI7XHJcbiAgICBhY3Rpb246IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocGxheWVyQ2xhc3M6c3RyaW5nLGhpdHBvaW50cz86bnVtYmVyLGN1cnJlbnRIaXRwb2ludHM/Om51bWJlcixwaHlzaWNhbEF0dGFjaz86bnVtYmVyLHBoeXNpY2FsRGVmZW5zZT86bnVtYmVyLHNwZWNpYWxBdHRhY2s/Om51bWJlcixzcGVjaWFsRGVmZW5zZT86bnVtYmVyLGRleHRlcml0eT86bnVtYmVyLGFjdGlvbj86c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDbGFzcyA9IHBsYXllckNsYXNzO1xyXG4gICAgICAgIHRoaXMuaGl0cG9pbnRzID0gaGl0cG9pbnRzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhpdHBvaW50cyA9IGN1cnJlbnRIaXRwb2ludHM7XHJcbiAgICAgICAgdGhpcy5waHlzaWNhbEF0dGFjayA9IHBoeXNpY2FsQXR0YWNrO1xyXG4gICAgICAgIHRoaXMucGh5c2ljYWxEZWZlbnNlID0gcGh5c2ljYWxEZWZlbnNlO1xyXG4gICAgICAgIHRoaXMuc3BlY2lhbEF0dGFjayA9IHNwZWNpYWxBdHRhY2s7XHJcbiAgICAgICAgdGhpcy5zcGVjaWFsRGVmZW5zZSA9IHNwZWNpYWxEZWZlbnNlO1xyXG4gICAgICAgIHRoaXMuZGV4dGVyaXR5ID0gZGV4dGVyaXR5O1xyXG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
