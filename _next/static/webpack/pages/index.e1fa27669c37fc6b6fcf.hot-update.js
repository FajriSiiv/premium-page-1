webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "D:\\Next js\\nextjs_landing_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}, {
  id: 2,
  title: "Design Quality & performance",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 3,
  title: "Layout and organized layers",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 4,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 22
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: "section.testimonial"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Testimonial",
    title: "Meet Client Satisfaction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      rating: item.review,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      as: "h3",
      sx: styles.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.description,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, item.description), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "card-footer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      className: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 19
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.avatar,
      alt: "client image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 21
      }
    }))));
  })))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: ["100%", null, null, "750px", "1000px", "1180px", null, "calc(50% + 865px)"],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s"
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: ["30px 20px 35px", "30px 25px 35px", "30px 20px 35px", "35px 30px 40px 40px", "30px 30px 35px", "35px 30px 40px 40px"],
    bg: "white",
    textAlign: "left",
    m: ["28px 5px 30px 5px", "28px 20px 30px 20px", "28px 15px 30px 15px", "28px 15px 30px 15px", "30px 20px 40px"],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)"
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex"
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0
        }
      },
      ".star": {
        color: "primary",
        mr: "1px"
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px"
      }
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover"
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwicmV2aWV3Q2FyZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibXQiLCJweCIsIndpZHRoIiwibWF4V2lkdGgiLCJtciIsIm1sIiwidHJhbnNpdGlvbiIsIm9wYWNpdHkiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJwIiwiYmciLCJtIiwibWIiLCJ1bCIsInBsIiwibGlzdFN0eWxlIiwic3ZnIiwibWFyZ2luUmlnaHQiLCJjb2xvciIsIm1hcmdpblRvcCIsImZsZXhTaHJpbmsiLCJpbWciLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwiaGVhZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVDLHFFQUxWO0FBTUVDLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQURXLEVBV1g7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLDhCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVLLHFFQUxWO0FBTUVILE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQVhXLEVBcUJYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw2QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTSxxRUFMVjtBQU1FSixNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FyQlcsRUErQlg7QUFDRVAsSUFBRSxFQUFFLENBRE47QUFFRUMsT0FBSyxFQUFFLCtCQUZUO0FBR0VDLGFBQVcsRUFDVCx5SkFKSjtBQUtFQyxRQUFNLEVBQUVPLHNFQUxWO0FBTUVMLE1BQUksRUFBRSxpQkFOUjtBQU9FQyxhQUFXLEVBQUUsWUFQZjtBQVFFQyxRQUFNLEVBQUU7QUFSVixDQS9CVyxDQUFiO0FBMkNBLElBQU1JLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxpQkFBYSxFQUFFLENBSFIsQ0FHVzs7QUFIWCxHQURRO0FBTWpCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdZOztBQUhaLEdBTlM7QUFXakJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFosR0FYUztBQWdCakJHLFFBQU0sRUFBRTtBQUNOUCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLEdBQVA7QUFBWUMsU0FBRyxFQUFFO0FBQWpCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFo7QUFoQlMsQ0FBbkI7QUF1QkEsSUFBTUksY0FBYyxHQUFHO0FBQ3JCQyxxQkFBbUIsRUFBRSxDQURBO0FBRXJCQyxRQUFNLEVBQUUsS0FGYTtBQUdyQkMsZUFBYSxFQUFFLElBSE07QUFJckJDLFlBQVUsRUFBRSxLQUpTO0FBS3JCQyxXQUFTLEVBQUUsRUFMVTtBQU1yQkMsZ0JBQWMsRUFBRSxvQkFOSztBQU9yQkMsbUJBQWlCLEVBQUUscURBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBFO0FBUXJCQyxjQUFZLEVBQUUsRUFSTztBQVNyQkMsV0FBUyxFQUFFLElBVFU7QUFVckJDLGVBQWEsRUFBRSxLQVZNO0FBV3JCQyxVQUFRLEVBQUUsSUFYVztBQVlyQkMsV0FBUyxFQUFFLEVBWlU7QUFhckJDLGlCQUFlLEVBQUUsSUFiSTtBQWNyQkMsa0JBQWdCLEVBQUUsRUFkRztBQWVyQkMsMEJBQXdCLEVBQUUsSUFmTDtBQWdCckJDLG1CQUFpQixFQUFFLEtBaEJFO0FBaUJyQjFCLFlBQVUsRUFBRUEsVUFqQlM7QUFrQnJCMkIsVUFBUSxFQUFFLEtBbEJXO0FBbUJyQkMsYUFBVyxFQUFFLEVBbkJRO0FBb0JyQnRCLGVBQWEsRUFBRTtBQXBCTSxDQUF2QjtBQXVCZSxTQUFTdUIsZUFBVCxHQUEyQjtBQUFBOztBQUN4QyxTQUNFO0FBQVMsTUFBRSxFQUFDLGFBQVo7QUFBMEIsTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFXLE9BQUcsRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsaUVBQUQ7QUFBZSxVQUFNLEVBQUMsYUFBdEI7QUFBb0MsU0FBSyxFQUFDLDBCQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUMsTUFBTSxDQUFDQyxlQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsMkRBQUQseUZBQWN2QixjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFDR3RCLElBQUksQ0FBQzhDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDUixxREFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRUgsTUFBTSxDQUFDSSxVQUFoQjtBQUE0QixTQUFHLEVBQUVELElBQUksQ0FBQzlDLEVBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyx5REFBRDtBQUFRLFlBQU0sRUFBRThDLElBQUksQ0FBQ3ZDLE1BQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLHFEQUFDLGdEQUFEO0FBQVMsUUFBRSxFQUFDLElBQVo7QUFBaUIsUUFBRSxFQUFFb0MsTUFBTSxDQUFDMUMsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHNkMsSUFBSSxDQUFDN0MsS0FEUixDQUZGLEVBS0UscURBQUMsNkNBQUQ7QUFBTSxRQUFFLEVBQUUwQyxNQUFNLENBQUN6QyxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQStCNEMsSUFBSSxDQUFDNUMsV0FBcEMsQ0FMRixFQU1FO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLHFEQUFDLDhDQUFEO0FBQU8sU0FBRyxFQUFFNEMsSUFBSSxDQUFDM0MsTUFBakI7QUFBeUIsU0FBRyxFQUFDLGNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURGLENBTkYsQ0FEUTtBQUFBLEdBQVQsQ0FESCxDQURGLENBRkYsQ0FERixDQURGO0FBeUJEO0tBMUJ1QnFDLGU7QUE0QnhCLElBQU1HLE1BQU0sR0FBRztBQUNiQyxpQkFBZSxFQUFFO0FBQ2ZJLFdBQU8sRUFBRSxNQURNO0FBRWZDLGtCQUFjLEVBQUUsVUFGRDtBQUdmQyxpQkFBYSxFQUFFLFFBSEE7QUFJZkMsY0FBVSxFQUFFLFVBSkc7QUFLZkMsTUFBRSxFQUFFLE9BTFc7QUFNZkMsTUFBRSxFQUFFLE1BTlc7QUFPZiwyQkFBdUI7QUFDckJDLFdBQUssRUFBRSxNQURjO0FBRXJCQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsT0FBckIsRUFBOEIsUUFBOUIsRUFBd0MsUUFBeEMsRUFBa0QsSUFBbEQsRUFBd0QsbUJBQXhELENBRlc7QUFHckJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxFQUE2QyxRQUE3QyxDQUhpQjtBQUlyQkMsUUFBRSxFQUFFLE1BSmlCO0FBS3JCLG9DQUE4QjtBQUM1QkMsa0JBQVUsRUFBRTtBQURnQixPQUxUO0FBUXJCLDREQUFzRDtBQUNwREMsZUFBTyxFQUFFLEtBRDJDO0FBRXBELGlEQUF5QztBQUN2Q0EsaUJBQU8sRUFBRTtBQUQ4QjtBQUZXO0FBUmpDO0FBUFIsR0FESjtBQXdCYlosWUFBVSxFQUFFO0FBQ1ZhLGFBQVMsRUFBRSxxQ0FERDtBQUVWRixjQUFVLEVBQUUsVUFGRjtBQUdWRyxnQkFBWSxFQUFFLEtBSEo7QUFJVkMsS0FBQyxFQUFFLENBQ0QsZ0JBREMsRUFFRCxnQkFGQyxFQUdELGdCQUhDLEVBSUQscUJBSkMsRUFLRCxnQkFMQyxFQU1ELHFCQU5DLENBSk87QUFZVkMsTUFBRSxFQUFFLE9BWk07QUFhVnJCLGFBQVMsRUFBRSxNQWJEO0FBY1ZzQixLQUFDLEVBQUUsQ0FDRCxtQkFEQyxFQUVELHFCQUZDLEVBR0QscUJBSEMsRUFJRCxxQkFKQyxFQUtELGdCQUxDLENBZE87QUFxQlYsZUFBVztBQUNUSixlQUFTLEVBQUU7QUFERixLQXJCRDtBQXdCVixlQUFXO0FBQ1RLLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURLO0FBRVRDLFFBQUUsRUFBRTtBQUNGQyxVQUFFLEVBQUUsQ0FERjtBQUVGQyxpQkFBUyxFQUFFLE1BRlQ7QUFHRkgsVUFBRSxFQUFFLENBSEY7QUFJRmpCLGVBQU8sRUFBRTtBQUpQLE9BRks7QUFRVHFCLFNBQUcsRUFBRTtBQUNIQyxtQkFBVyxFQUFFLEtBRFY7QUFFSCwwQkFBa0I7QUFDaEJBLHFCQUFXLEVBQUU7QUFERztBQUZmLE9BUkk7QUFjVCxlQUFTO0FBQ1BDLGFBQUssRUFBRSxTQURBO0FBRVBmLFVBQUUsRUFBRTtBQUZHLE9BZEE7QUFrQlQsaUJBQVc7QUFDVGUsYUFBSyxFQUFFLE1BREU7QUFFVGYsVUFBRSxFQUFFO0FBRks7QUFsQkYsS0F4QkQ7QUErQ1Ysb0JBQWdCO0FBQ2RSLGFBQU8sRUFBRSxNQURLO0FBRWRHLGdCQUFVLEVBQUUsUUFGRTtBQUdkcUIsZUFBUyxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBSEc7QUFJZCxnQkFBVTtBQUNSQyxrQkFBVSxFQUFFLENBREo7QUFFUmpCLFVBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQUZJO0FBR1JSLGVBQU8sRUFBRSxNQUhEO0FBSVIwQixXQUFHLEVBQUU7QUFDSHBCLGVBQUssRUFBRSxNQURKO0FBRUhxQixnQkFBTSxFQUFFLE1BRkw7QUFHSGQsc0JBQVksRUFBRSxLQUhYO0FBSUhlLG1CQUFTLEVBQUU7QUFKUjtBQUpHO0FBSkk7QUEvQ04sR0F4QkM7QUF3RmIzRSxPQUFLLEVBQUU7QUFDTDRFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREw7QUFFTEMsY0FBVSxFQUFFLEdBRlA7QUFHTGIsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBSEM7QUFJTE0sU0FBSyxFQUFFLE1BSkY7QUFLTFEsY0FBVSxFQUFFO0FBTFAsR0F4Rk07QUErRmI3RSxhQUFXLEVBQUU7QUFDWDJFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURDO0FBRVhDLGNBQVUsRUFBRSxRQUZEO0FBR1hQLFNBQUssRUFBRSxNQUhJO0FBSVhRLGNBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsQ0FBYjtBQUpELEdBL0ZBO0FBcUdiQyxTQUFPLEVBQUU7QUFDUEgsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREg7QUFFUEMsY0FBVSxFQUFFLEdBRkw7QUFHUGIsTUFBRSxFQUFFLEtBSEc7QUFJUE0sU0FBSyxFQUFFLE1BSkE7QUFLUFEsY0FBVSxFQUFFO0FBTEwsR0FyR0k7QUE0R2J6RSxhQUFXLEVBQUU7QUFDWGlFLFNBQUssRUFBRSxTQURJO0FBRVhPLGNBQVUsRUFBRSxLQUZEO0FBR1hELFlBQVEsRUFBRSxDQUhDO0FBSVhFLGNBQVUsRUFBRTtBQUpEO0FBNUdBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTFmYTI3NjY5YzM3ZmM2YjZmY2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgUmF0aW5nIGZyb20gXCJjb21wb25lbnRzL3JhdGluZ1wiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbi1ncm91cFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuXG5pbXBvcnQgQXZhdGFyMSBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nXCI7XG5pbXBvcnQgQXZhdGFyMiBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nXCI7XG5pbXBvcnQgQXZhdGFyMyBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nXCI7XG5pbXBvcnQgQXZhdGFyNCBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxuICAgIG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuICAgIHJldmlldzogNCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkRlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxuICAgIGF2YXRhcjogQXZhdGFyMixcbiAgICBuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcbiAgICByZXZpZXc6IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxuICAgIGF2YXRhcjogQXZhdGFyMyxcbiAgICBuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcbiAgICByZXZpZXc6IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxuICAgIG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuICAgIHJldmlldzogNCxcbiAgfSxcbl07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXG4gICAgaXRlbXM6IDQsXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b1BsYXlTcGVlZDogMzAwMCxcbiAgY2VudGVyTW9kZTogZmFsc2UsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG4gIGRvdExpc3RDbGFzczogXCJcIixcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGl0ZW1DbGFzczogXCJcIixcbiAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxuICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gIHNob3dEb3RzOiBmYWxzZSxcbiAgc2xpZGVyQ2xhc3M6IFwiXCIsXG4gIHNsaWRlc1RvU2xpZGU6IDEsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbFwiIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi50ZXN0aW1vbmlhbFwiIH19PlxuICAgICAgPENvbnRhaW5lciBjc3M9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJUZXN0aW1vbmlhbFwiIHRpdGxlPVwiTWVldCBDbGllbnQgU2F0aXNmYWN0aW9uXCIgLz5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNhcm91c2VsV3JhcHBlcn0+XG4gICAgICAgICAgPENhcm91c2VsIHsuLi5jYXJvdXNlbFBhcmFtc30+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPFJhdGluZyByYXRpbmc9e2l0ZW0ucmV2aWV3fSAvPlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT57aXRlbS5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpdGVtLmF2YXRhcn0gYWx0PVwiY2xpZW50IGltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcm91c2VsV3JhcHBlcjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImZsZXgtZW5kXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtZW5kXCIsXG4gICAgbXQ6IFwiLTMwcHhcIixcbiAgICBweDogXCIxNXB4XCIsXG4gICAgXCIuY2Fyb3VzZWwtY29udGFpbmVyXCI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1heFdpZHRoOiBbXCIxMDAlXCIsIG51bGwsIG51bGwsIFwiNzUwcHhcIiwgXCIxMDAwcHhcIiwgXCIxMTgwcHhcIiwgbnVsbCwgXCJjYWxjKDUwJSArIDg2NXB4KVwiXSxcbiAgICAgIG1yOiBbXCJhdXRvXCIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIFwiLTIyMHB4XCJdLFxuICAgICAgbWw6IFwiYXV0b1wiLFxuICAgICAgXCIucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbVwiOiB7XG4gICAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMjVzXCIsXG4gICAgICB9LFxuICAgICAgXCIucmVhY3QtbXVsdGktY2Fyb3VzZWwtaXRlbS0tYWN0aXZlOm50aC1vZi10eXBlKDRuKVwiOiB7XG4gICAgICAgIG9wYWNpdHk6IFwiMC41XCIsXG4gICAgICAgIFwiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYyMHB4KVwiOiB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcmV2aWV3Q2FyZDoge1xuICAgIGJveFNoYWRvdzogXCIwcHggMHB4IDFweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjM1KVwiLFxuICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNnB4XCIsXG4gICAgcDogW1xuICAgICAgXCIzMHB4IDIwcHggMzVweFwiLFxuICAgICAgXCIzMHB4IDI1cHggMzVweFwiLFxuICAgICAgXCIzMHB4IDIwcHggMzVweFwiLFxuICAgICAgXCIzNXB4IDMwcHggNDBweCA0MHB4XCIsXG4gICAgICBcIjMwcHggMzBweCAzNXB4XCIsXG4gICAgICBcIjM1cHggMzBweCA0MHB4IDQwcHhcIixcbiAgICBdLFxuICAgIGJnOiBcIndoaXRlXCIsXG4gICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICBtOiBbXG4gICAgICBcIjI4cHggNXB4IDMwcHggNXB4XCIsXG4gICAgICBcIjI4cHggMjBweCAzMHB4IDIwcHhcIixcbiAgICAgIFwiMjhweCAxNXB4IDMwcHggMTVweFwiLFxuICAgICAgXCIyOHB4IDE1cHggMzBweCAxNXB4XCIsXG4gICAgICBcIjMwcHggMjBweCA0MHB4XCIsXG4gICAgXSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm94U2hhZG93OiBcIjBweCA2cHggMzBweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpXCIsXG4gICAgfSxcbiAgICBcIi5yYXRpbmdcIjoge1xuICAgICAgbWI6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIHVsOiB7XG4gICAgICAgIHBsOiAwLFxuICAgICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgICAgICBtYjogMCxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICB9LFxuICAgICAgc3ZnOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiBcIjJweFwiLFxuICAgICAgICBcIiY6bGFzdC1vZi10eXBlXCI6IHtcbiAgICAgICAgICBtYXJnaW5SaWdodDogMCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBcIi5zdGFyXCI6IHtcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgICBtcjogXCIxcHhcIixcbiAgICAgIH0sXG4gICAgICBcIi5zdGFyLW9cIjoge1xuICAgICAgICBjb2xvcjogXCIjZGRkXCIsXG4gICAgICAgIG1yOiBcIjFweFwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFwiLmNhcmQtZm9vdGVyXCI6IHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIG1hcmdpblRvcDogWzUsIG51bGwsIG51bGwsIFwiMzNweFwiXSxcbiAgICAgIFwiLmltYWdlXCI6IHtcbiAgICAgICAgZmxleFNocmluazogMCxcbiAgICAgICAgbXI6IFszLCBudWxsLCBudWxsLCA0XSxcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGltZzoge1xuICAgICAgICAgIHdpZHRoOiBcIjU1cHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiNTVweFwiLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYjogWzMsIG51bGwsIG51bGwsIFwiMjJweFwiXSxcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgbGluZUhlaWdodDogMS42LFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXG4gICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgbGluZUhlaWdodDogWzEuODUsIG51bGwsIDJdLFxuICB9LFxuICBoZWFkaW5nOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgbWI6IFwiM3B4XCIsXG4gICAgY29sb3I6IFwidGV4dFwiLFxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcbiAgfSxcbiAgZGVzaWduYXRpb246IHtcbiAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICBmb250U2l6ZTogMSxcbiAgICBsaW5lSGVpZ2h0OiAxLjQsXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==