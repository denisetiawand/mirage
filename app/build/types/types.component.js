System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TypesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TypesComponent = (function () {
                function TypesComponent() {
                }
                TypesComponent.prototype.ngOnChanges = function (changes) {
                    if (changes['detectChange'] && this.mapping.types.length) {
                        var data = this.createTokenData(this.mapping.types);
                        console.log(data);
                        var setType = $('#setType');
                        setType.select2({
                            placeholder: "Select types to apply query",
                            tags: false,
                            data: data
                        });
                        setType.on("change", function (e) {
                            this.changeType(setType.val());
                        }.bind(this));
                    }
                };
                TypesComponent.prototype.createTokenData = function (types) {
                    var data = [];
                    types.forEach(function (val) {
                        var obj = {
                            id: val,
                            text: val
                        };
                        data.push(obj);
                    });
                    return data;
                };
                TypesComponent.prototype.changeType = function (val) {
                    //this.mapping.resultQuery.result = [];
                    this.mapping.selectedTypes = val;
                    var availableFields = [];
                    val.forEach(function (type) {
                        var mapObj = this.mapping.mapping[this.config.appname].mappings[type].properties;
                        for (var field in mapObj) {
                            var index = typeof mapObj[field]['index'] != 'undefined' ? mapObj[field]['index'] : null;
                            var obj = {
                                name: field,
                                type: mapObj[field]['type'],
                                index: index
                            };
                            switch (obj.type) {
                                case 'long':
                                case 'integer':
                                case 'short':
                                case 'byte':
                                case 'double':
                                case 'float':
                                    obj.type = 'numeric';
                                    break;
                            }
                            availableFields.push(obj);
                        }
                    }.bind(this));
                    console.log(availableFields);
                    this.mapping.resultQuery.availableFields = availableFields;
                    // setTimeout(function(){
                    // 	var availableFields = [];
                    // 	this.mapping.resultQuery.availableFields = availableFields;
                    // }.bind(this),300);
                };
                TypesComponent = __decorate([
                    core_1.Component({
                        selector: 'types',
                        templateUrl: './app/build/types/types.component.html',
                        styleUrls: ['./app/build/types/types.component.css'],
                        inputs: ['mapping', 'config', 'detectChange']
                    }), 
                    __metadata('design:paramtypes', [])
                ], TypesComponent);
                return TypesComponent;
            }());
            exports_1("TypesComponent", TypesComponent);
        }
    }
});
//# sourceMappingURL=types.component.js.map