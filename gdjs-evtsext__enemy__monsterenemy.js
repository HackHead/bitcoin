
gdjs.evtsExt__Enemy__MonsterEnemy = gdjs.evtsExt__Enemy__MonsterEnemy || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy = class MonsterEnemy extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.SharedData = class MonsterEnemySharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Enemy_MonsterEnemySharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Enemy_MonsterEnemySharedData = new gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.SharedData(
      initialData
    );
  }
  return instanceContainer._Enemy_MonsterEnemySharedData;
}

// Methods:
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext = {};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("Fire");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1[i].setAnimationName("Fire");
}
}}

}


};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Fire") >= 2 ) {
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("Fire") ) {
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("Fire");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("NoFire");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1);

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Fire") >= 2 ) {
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].isCurrentAnimationName("NoFire") ) {
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}}
if (gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].resetTimer("Fire");
}
}{for(var i = 0, len = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAnimationName("Fire");
}
}}

}


};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext = {};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1= [];
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects2= [];

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1);

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1[i].isCurrentAnimationName("Fire") ) {
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1[k] = gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.condition0IsTrue_0.val) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFire = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy.prototype.IsOnFireContext.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}


gdjs.registerBehavior("Enemy::MonsterEnemy", gdjs.evtsExt__Enemy__MonsterEnemy.MonsterEnemy);
