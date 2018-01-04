"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_extensions_1 = require("nativescript-angular/router/router-extensions");
var SocialShare = require("nativescript-social-share");
var dog_service_1 = require("../common/dog.service");
var firebase = require("nativescript-plugin-firebase");
var HomeComponent = (function () {
    function HomeComponent(routerExtensions, dogService) {
        this.routerExtensions = routerExtensions;
        this.dogService = dogService;
        this.myItems = [];
    }
    HomeComponent.prototype.share = function (url) {
        SocialShare.shareText(url);
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dogService.getNewList().then(function (response) {
            _this.myItems = response.message;
        }, function (error) { return console.log('error new list ', error); });
        this.dogService.getList().subscribe(function (response) { return console.log(response); }, function (error) { return console.log('error', error); });
        firebase.admob.showInterstitial({
            iosInterstitialId: "ca-app-pub-9517346003011652/6938836122",
            androidInterstitialId: "ca-app-pub-9517346003011652/6938836122",
            testing: true,
            iosTestDeviceIds: [
                "45d77bf513dfabc2949ba053da83c0c7b7e87715",
                "fee4cf319a242eab4701543e4c16db89c722731f" // Eddy's iPad Pro
            ]
        }).then(function () {
            console.log("AdMob interstitial showing");
        }, function (errorMessage) {
            alert('error admob inter');
        });
        firebase.admob.showBanner({
            size: firebase.admob.AD_SIZE.SMART_BANNER,
            margins: {
                bottom: 10,
                top: 0
            },
            androidBannerId: "ca-app-pub-9517346003011652/7749101329",
            iosBannerId: "ca-app-pub-9517346003011652/3985369721",
            testing: true,
            iosTestDeviceIds: [
                "45d77bf513dfabc2949ba053da83c0c7b7e87715",
                "fee4cf319a242eab4701543e4c16db89c722731f" // Eddy's iPad Pro
            ]
        }).then(function () {
            console.log("AdMob banner showing");
        }, function (errorMessage) {
            alert('error in admob');
        });
    };
    HomeComponent.prototype.back = function () {
        this.routerExtensions.backToPreviousPage();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "ns-home",
            templateUrl: "./home.component.html",
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_extensions_1.RouterExtensions,
            dog_service_1.DogService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxtRkFBaUY7QUFDakYsdURBQXlEO0FBQ3pELHFEQUFtRDtBQUVuRCx1REFBMEQ7QUFTMUQ7SUFJSSx1QkFDWSxnQkFBa0MsRUFDbEMsVUFBc0I7UUFEdEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSmxDLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFLVixDQUFDO0lBRUosNkJBQUssR0FBTCxVQUFNLEdBQVc7UUFDYixXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFSCxnQ0FBUSxHQUFSO1FBQUEsaUJBc0RDO1FBbkRHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM3QixVQUFDLFFBQWE7WUFDVixLQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUE7UUFDbkMsQ0FBQyxFQUNELFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLENBQUMsRUFBckMsQ0FBcUMsQ0FDbkQsQ0FBQTtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUMvQixVQUFDLFFBQVEsSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQXJCLENBQXFCLEVBQ25DLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQTNCLENBQTJCLENBQ3pDLENBQUE7UUFHRCxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQzVCLGlCQUFpQixFQUFFLHdDQUF3QztZQUMzRCxxQkFBcUIsRUFBRSx3Q0FBd0M7WUFDL0QsT0FBTyxFQUFFLElBQUk7WUFDYixnQkFBZ0IsRUFBRTtnQkFDZCwwQ0FBMEM7Z0JBQzFDLDBDQUEwQyxDQUFFLGtCQUFrQjthQUNqRTtTQUNBLENBQUMsQ0FBQyxJQUFJLENBQ0g7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxFQUNELFVBQVUsWUFBWTtZQUN0QixLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQ0osQ0FBQztRQUVOLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3RCLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZO1lBQ3pDLE9BQU8sRUFBRTtnQkFDTCxNQUFNLEVBQUUsRUFBRTtnQkFDVixHQUFHLEVBQUUsQ0FBQzthQUNUO1lBQ0QsZUFBZSxFQUFFLHdDQUF3QztZQUN6RCxXQUFXLEVBQUUsd0NBQXdDO1lBQ3JELE9BQU8sRUFBRSxJQUFJO1lBQ2IsZ0JBQWdCLEVBQUU7Z0JBQ2QsMENBQTBDO2dCQUMxQywwQ0FBMEMsQ0FBRSxrQkFBa0I7YUFDakU7U0FDQSxDQUFDLENBQUMsSUFBSSxDQUNIO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFDRCxVQUFVLFlBQVk7WUFDdEIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUNKLENBQUM7SUFDVixDQUFDO0lBRUQsNEJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUF2RVEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FPZ0Msb0NBQWdCO1lBQ3RCLHdCQUFVO09BTnpCLGFBQWEsQ0F5RXhCO0lBQUQsb0JBQUM7Q0FBQSxBQXpFRixJQXlFRTtBQXpFVyxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXIvcm91dGVyLWV4dGVuc2lvbnMnO1xuaW1wb3J0ICogYXMgU29jaWFsU2hhcmUgZnJvbSBcIm5hdGl2ZXNjcmlwdC1zb2NpYWwtc2hhcmVcIjtcbmltcG9ydCB7IERvZ1NlcnZpY2UgfSBmcm9tICcuLi9jb21tb24vZG9nLnNlcnZpY2UnO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaG9tZVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBcbiAgICBteUl0ZW1zID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGRvZ1NlcnZpY2U6IERvZ1NlcnZpY2VcbiAgICApIHt9XG5cbiAgICBzaGFyZSh1cmw6IHN0cmluZykge1xuICAgICAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQodXJsKTtcbiAgICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuXG5cbiAgICAgICAgdGhpcy5kb2dTZXJ2aWNlLmdldE5ld0xpc3QoKS50aGVuKFxuICAgICAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm15SXRlbXMgPSByZXNwb25zZS5tZXNzYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3IgbmV3IGxpc3QgJywgZXJyb3IpXG4gICAgICAgIClcblxuICAgICAgICB0aGlzLmRvZ1NlcnZpY2UuZ2V0TGlzdCgpLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpLFxuICAgICAgICAgICAgKGVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcilcbiAgICAgICAgKVxuXG5cbiAgICAgICAgZmlyZWJhc2UuYWRtb2Iuc2hvd0ludGVyc3RpdGlhbCh7XG4gICAgICAgICAgICBpb3NJbnRlcnN0aXRpYWxJZDogXCJjYS1hcHAtcHViLTk1MTczNDYwMDMwMTE2NTIvNjkzODgzNjEyMlwiLFxuICAgICAgICAgICAgYW5kcm9pZEludGVyc3RpdGlhbElkOiBcImNhLWFwcC1wdWItOTUxNzM0NjAwMzAxMTY1Mi82OTM4ODM2MTIyXCIsXG4gICAgICAgICAgICB0ZXN0aW5nOiB0cnVlLCAvLyB3aGVuIG5vdCBydW5uaW5nIGluIHByb2R1Y3Rpb24gc2V0IHRoaXMgdG8gdHJ1ZSwgR29vZ2xlIGRvZXNuJ3QgbGlrZSBpdCBhbnkgb3RoZXIgd2F5XG4gICAgICAgICAgICBpb3NUZXN0RGV2aWNlSWRzOiBbIC8vIEFuZHJvaWQgYXV0b21hdGljYWxseSBhZGRzIHRoZSBjb25uZWN0ZWQgZGV2aWNlIGFzIHRlc3QgZGV2aWNlIHdpdGggdGVzdGluZzp0cnVlLCBpT1MgZG9lcyBub3RcbiAgICAgICAgICAgICAgICBcIjQ1ZDc3YmY1MTNkZmFiYzI5NDliYTA1M2RhODNjMGM3YjdlODc3MTVcIiwgLy8gRWRkeSdzIGlQaG9uZSA2c1xuICAgICAgICAgICAgICAgIFwiZmVlNGNmMzE5YTI0MmVhYjQ3MDE1NDNlNGMxNmRiODljNzIyNzMxZlwiICAvLyBFZGR5J3MgaVBhZCBQcm9cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQWRNb2IgaW50ZXJzdGl0aWFsIHNob3dpbmdcIik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ2Vycm9yIGFkbW9iIGludGVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5hZG1vYi5zaG93QmFubmVyKHtcbiAgICAgICAgICAgIHNpemU6IGZpcmViYXNlLmFkbW9iLkFEX1NJWkUuU01BUlRfQkFOTkVSLCAvLyBzZWUgZmlyZWJhc2UuYWRtb2IuQURfU0laRSBmb3IgYWxsIG9wdGlvbnNcbiAgICAgICAgICAgIG1hcmdpbnM6IHsgLy8gb3B0aW9uYWwgbnIgb2YgZGV2aWNlIGluZGVwZW5kZW50IHBpeGVscyBmcm9tIHRoZSB0b3Agb3IgYm90dG9tIChkb24ndCBzZXQgYm90aClcbiAgICAgICAgICAgICAgICBib3R0b206IDEwLFxuICAgICAgICAgICAgICAgIHRvcDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuZHJvaWRCYW5uZXJJZDogXCJjYS1hcHAtcHViLTk1MTczNDYwMDMwMTE2NTIvNzc0OTEwMTMyOVwiLFxuICAgICAgICAgICAgaW9zQmFubmVySWQ6IFwiY2EtYXBwLXB1Yi05NTE3MzQ2MDAzMDExNjUyLzM5ODUzNjk3MjFcIixcbiAgICAgICAgICAgIHRlc3Rpbmc6IHRydWUsIC8vIHdoZW4gbm90IHJ1bm5pbmcgaW4gcHJvZHVjdGlvbiBzZXQgdGhpcyB0byB0cnVlLCBHb29nbGUgZG9lc24ndCBsaWtlIGl0IGFueSBvdGhlciB3YXlcbiAgICAgICAgICAgIGlvc1Rlc3REZXZpY2VJZHM6IFsgLy9BbmRyb2lkIGF1dG9tYXRpY2FsbHkgYWRkcyB0aGUgY29ubmVjdGVkIGRldmljZSBhcyB0ZXN0IGRldmljZSB3aXRoIHRlc3Rpbmc6dHJ1ZSwgaU9TIGRvZXMgbm90XG4gICAgICAgICAgICAgICAgXCI0NWQ3N2JmNTEzZGZhYmMyOTQ5YmEwNTNkYTgzYzBjN2I3ZTg3NzE1XCIsIC8vIEVkZHkncyBpUGhvbmUgNnNcbiAgICAgICAgICAgICAgICBcImZlZTRjZjMxOWEyNDJlYWI0NzAxNTQzZTRjMTZkYjg5YzcyMjczMWZcIiAgLy8gRWRkeSdzIGlQYWQgUHJvXG4gICAgICAgICAgICBdXG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkTW9iIGJhbm5lciBzaG93aW5nXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdlcnJvciBpbiBhZG1vYicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgYmFjaygpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuIH1cbiJdfQ==