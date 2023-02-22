
if (typeof gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection !== "undefined") {
  gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection = {};

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "Right");
}
}if ( gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo4Way.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 0;
}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "Down");
}
}if ( gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo4Way.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 1;
}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "Left");
}
}if ( gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo4Way.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 2;
}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val = false;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0;
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Direction") : "") == "Up");
}
}if ( gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition0IsTrue_0.val ) {
{
gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val = gdjs.evtsExt__SpriteMultitouchJoystick__AngleTo4Way.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) == 3;
}}
if (gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.condition1IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.func = function(runtimeScene, Angle, Direction, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Angle") return Angle;
if (argName === "Direction") return Direction;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__SpriteMultitouchJoystick__IsAngleIn4WayDirection.registeredGdjsCallbacks = [];