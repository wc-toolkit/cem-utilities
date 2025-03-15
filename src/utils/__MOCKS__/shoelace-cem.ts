/**
 * This file is generated from the [Shoelace](https://shoelace.style/) component library.
 */
export const shoelaceCem = {
  schemaVersion: "1.0.0",
  readme: "",
  modules: [
    {
      kind: "javascript-module",
      path: "dist/components/alert/alert.component.js",
      typeDefinitionPath: "dist/components/alert/alert.component.d.ts",
      declarations: [
        {
          kind: "class",
          description: "A description about what an alert is and how to use it",
          name: "SlAlert",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The container that wraps the optional icon.",
              name: "icon",
            },
            {
              description: "The container that wraps the alert's main content.",
              name: "message",
            },
            {
              description: "The close button, an `<sl-icon-button>`.",
              name: "close-button",
            },
            {
              description: "The close button's exported `base` part.",
              name: "close-button__base",
            },
          ],
          slots: [
            {
              description: "The alert's main content.",
              name: "",
            },
            {
              description:
                "An icon to show in the alert. Works best with `<sl-icon>`.",
              name: "icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon-button': SlIconButton }",
            },
            {
              kind: "field",
              name: "autoHideTimeout",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "remainingTimeInterval",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "countdownAnimation",
              type: {
                text: "Animation | undefined",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'icon', 'suffix')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "base",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "countdownElement",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the alert's open state.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "closable",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enables a close button that allows the user to dismiss the alert.",
              attribute: "closable",
              reflects: true,
            },
            {
              kind: "field",
              name: "variant",
              type: {
                text: "'primary' | 'success' | 'neutral' | 'warning' | 'danger'",
              },
              default: "'primary'",
              description: "The alert's theme variant.",
              attribute: "variant",
              reflects: true,
            },
            {
              kind: "field",
              name: "duration",
              default: "Infinity",
              description:
                "The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with\nthe alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning\nthe alert will not close on its own.",
              attribute: "duration",
            },
            {
              kind: "field",
              name: "countdown",
              type: {
                text: "'rtl' | 'ltr' | undefined",
              },
              description:
                "Enables a countdown that indicates the remaining time the alert will be displayed.\nTypically used to indicate the remaining time before a whole app refresh.",
              attribute: "countdown",
              reflects: true,
            },
            {
              kind: "field",
              name: "remainingTime",
              privacy: "private",
            },
            {
              kind: "method",
              name: "restartAutoHide",
              privacy: "private",
            },
            {
              kind: "method",
              name: "pauseAutoHide",
              privacy: "private",
            },
            {
              kind: "method",
              name: "resumeAutoHide",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleCountdownChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleCloseClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
            {
              kind: "method",
              name: "handleDurationChange",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the alert.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the alert",
            },
            {
              kind: "method",
              name: "toast",
              description:
                "Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when\ndismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by\ncalling this method again. The returned promise will resolve after the alert is hidden.",
            },
          ],
          events: [
            {
              description: "Emitted when the alert opens.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
              type: {
                text: "SlShowType",
              },
            },
            {
              description:
                "Emitted after the alert opens and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
              parsedType: {
                text: "'value 1' | 'value 2' | 'value 3' | 'value 4'",
              },
            },
            {
              description: "Emitted when the alert closes.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
              type: {
                text: "SlHideType",
              },
            },
            {
              description:
                "Emitted after the alert closes and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
              type: {
                text: "SlHideType",
              },
            },
          ],
          attributes: [
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the alert's open state.",
              fieldName: "open",
            },
            {
              name: "closable",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enables a close button that allows the user to dismiss the alert.",
              fieldName: "closable",
            },
            {
              name: "variant",
              type: {
                text: "'primary' | 'success' | 'neutral' | 'warning' | 'danger'",
              },
              default: "'primary'",
              description: "The alert's theme variant.",
              fieldName: "variant",
            },
            {
              name: "duration",
              default: "Infinity",
              description:
                "The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with\nthe alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning\nthe alert will not close on its own.",
              fieldName: "duration",
            },
            {
              name: "countdown",
              type: {
                text: "'rtl' | 'ltr' | undefined",
              },
              description:
                "Enables a countdown that indicates the remaining time the alert will be displayed.\nTypically used to indicate the remaining time before a whole app refresh.",
              fieldName: "countdown",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Alerts are used to display important messages inline or as toast notifications.",
          tagNameWithoutPrefix: "alert",
          tagName: "sl-alert",
          customElement: true,
          jsDoc:
            "/**\n * @summary Alerts are used to display important messages inline or as toast notifications.\n * @documentation https://shoelace.style/components/alert\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon-button\n *\n * @slot - The alert's main content.\n * @slot icon - An icon to show in the alert. Works best with `<sl-icon>`.\n *\n * @event sl-show - Emitted when the alert opens.\n * @event sl-after-show - Emitted after the alert opens and all animations are complete.\n * @event sl-hide - Emitted when the alert closes.\n * @event sl-after-hide - Emitted after the alert closes and all animations are complete.\n *\n * @csspart base - The component's base wrapper.\n * @csspart icon - The container that wraps the optional icon.\n * @csspart message - The container that wraps the alert's main content.\n * @csspart close-button - The close button, an `<sl-icon-button>`.\n * @csspart close-button__base - The close button's exported `base` part.\n *\n * @animation alert.show - The animation to use when showing the alert.\n * @animation alert.hide - The animation to use when hiding the alert.\n */",
          documentation: "https://shoelace.style/components/alert",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon-button"],
          animations: [
            {
              name: "alert.show",
              description: "The animation to use when showing the alert.",
            },
            {
              name: "alert.hide",
              description: "The animation to use when hiding the alert.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlAlert",
            module: "components/alert/alert.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/animated-image/animated-image.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlAnimatedImage",
          cssProperties: [
            {
              description: "The size of the icon box.",
              name: "--control-box-size",
            },
            {
              description: "The size of the play/pause icons.",
              name: "--icon-size",
            },
          ],
          cssParts: [
            {
              description:
                "The container that surrounds the pause/play icons and provides their background.",
              name: "control-box",
            },
          ],
          slots: [
            {
              description:
                "Optional play icon to use instead of the default. Works best with `<sl-icon>`.",
              name: "play-icon",
            },
            {
              description:
                "Optional pause icon to use instead of the default. Works best with `<sl-icon>`.",
              name: "pause-icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "animatedImage",
              type: {
                text: "HTMLImageElement",
              },
            },
            {
              kind: "field",
              name: "frozenFrame",
              type: {
                text: "string",
              },
            },
            {
              kind: "field",
              name: "isLoaded",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "src",
              type: {
                text: "string",
              },
              description: "The path to the image to load.",
              attribute: "src",
            },
            {
              kind: "field",
              name: "alt",
              type: {
                text: "string",
              },
              description:
                "A description of the image used by assistive devices.",
              attribute: "alt",
            },
            {
              kind: "field",
              name: "play",
              type: {
                text: "boolean",
              },
              description:
                "Plays the animation. When this attribute is remove, the animation will pause.",
              attribute: "play",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleLoad",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleError",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handlePlayChange",
            },
            {
              kind: "method",
              name: "handleSrcChange",
            },
          ],
          events: [
            {
              description: "Emitted when the image loads successfully.",
              name: "sl-load",
              reactName: "onSlLoad",
              eventName: "SlLoadEvent",
            },
            {
              description: "Emitted when the image fails to load.",
              name: "sl-error",
              reactName: "onSlError",
              eventName: "SlErrorEvent",
            },
          ],
          attributes: [
            {
              name: "src",
              type: {
                text: "string",
              },
              description: "The path to the image to load.",
              fieldName: "src",
            },
            {
              name: "alt",
              type: {
                text: "string",
              },
              description:
                "A description of the image used by assistive devices.",
              fieldName: "alt",
            },
            {
              name: "play",
              type: {
                text: "boolean",
              },
              description:
                "Plays the animation. When this attribute is remove, the animation will pause.",
              fieldName: "play",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "A component for displaying animated GIFs and WEBPs that play and pause on interaction.",
          tagNameWithoutPrefix: "animated-image",
          tagName: "sl-animated-image",
          customElement: true,
          jsDoc:
            "/**\n * @summary A component for displaying animated GIFs and WEBPs that play and pause on interaction.\n * @documentation https://shoelace.style/components/animated-image\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @event sl-load - Emitted when the image loads successfully.\n * @event sl-error - Emitted when the image fails to load.\n *\n * @slot play-icon - Optional play icon to use instead of the default. Works best with `<sl-icon>`.\n * @slot pause-icon - Optional pause icon to use instead of the default. Works best with `<sl-icon>`.\n *\n * @part control-box - The container that surrounds the pause/play icons and provides their background.\n *\n * @cssproperty --control-box-size - The size of the icon box.\n * @cssproperty --icon-size - The size of the play/pause icons.\n */",
          documentation: "https://shoelace.style/components/animated-image",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlAnimatedImage",
            module: "components/animated-image/animated-image.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/animation/animation.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlAnimation",
          slots: [
            {
              description:
                "The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To animate multiple elements, either wrap them in a single container or use multiple `<sl-animation>` elements.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "animation",
              type: {
                text: "Animation | undefined",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "hasStarted",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "Promise<HTMLSlotElement>",
              },
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "'none'",
              description:
                "The name of the built-in animation to use. For custom animations, use the `keyframes` prop.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "play",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when\nthe animation finishes or gets canceled.",
              attribute: "play",
              reflects: true,
            },
            {
              kind: "field",
              name: "delay",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The number of milliseconds to delay the start of the animation.",
              attribute: "delay",
            },
            {
              kind: "field",
              name: "direction",
              type: {
                text: "PlaybackDirection",
              },
              default: "'normal'",
              description:
                "Determines the direction of playback as well as the behavior when reaching the end of an iteration.\n[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)",
              attribute: "direction",
            },
            {
              kind: "field",
              name: "duration",
              type: {
                text: "number",
              },
              default: "1000",
              description:
                "The number of milliseconds each iteration of the animation takes to complete.",
              attribute: "duration",
            },
            {
              kind: "field",
              name: "easing",
              type: {
                text: "string",
              },
              default: "'linear'",
              description:
                "The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function\nsuch as `cubic-bezier(0, 1, .76, 1.14)`.",
              attribute: "easing",
            },
            {
              kind: "field",
              name: "endDelay",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The number of milliseconds to delay after the active period of an animation sequence.",
              attribute: "end-delay",
            },
            {
              kind: "field",
              name: "fill",
              type: {
                text: "FillMode",
              },
              default: "'auto'",
              description:
                "Sets how the animation applies styles to its target before and after its execution.",
              attribute: "fill",
            },
            {
              kind: "field",
              name: "iterations",
              default: "Infinity",
              description:
                "The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.",
              attribute: "iterations",
            },
            {
              kind: "field",
              name: "iterationStart",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The offset at which to start the animation, usually between 0 (start) and 1 (end).",
              attribute: "iteration-start",
            },
            {
              kind: "field",
              name: "keyframes",
              type: {
                text: "Keyframe[] | undefined",
              },
              description:
                "The keyframes to use for the animation. If this is set, `name` will be ignored.",
            },
            {
              kind: "field",
              name: "playbackRate",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this\nto `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This\nvalue can be changed without causing the animation to restart.",
              attribute: "playback-rate",
            },
            {
              kind: "field",
              name: "currentTime",
              type: {
                text: "CSSNumberish",
              },
              description: "Gets and sets the current animation time.",
            },
            {
              kind: "field",
              name: "handleAnimationFinish",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleAnimationCancel",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "createAnimation",
              privacy: "private",
            },
            {
              kind: "method",
              name: "destroyAnimation",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleAnimationChange",
            },
            {
              kind: "method",
              name: "handlePlayChange",
            },
            {
              kind: "method",
              name: "handlePlaybackRateChange",
            },
            {
              kind: "method",
              name: "cancel",
              description:
                "Clears all keyframe effects caused by this animation and aborts its playback.",
            },
            {
              kind: "method",
              name: "finish",
              description:
                "Sets the playback time to the end of the animation corresponding to the current playback direction.",
            },
          ],
          events: [
            {
              description: "Emitted when the animation is canceled.",
              name: "sl-cancel",
              reactName: "onSlCancel",
              eventName: "SlCancelEvent",
            },
            {
              description: "Emitted when the animation finishes.",
              name: "sl-finish",
              reactName: "onSlFinish",
              eventName: "SlFinishEvent",
            },
            {
              description: "Emitted when the animation starts or restarts.",
              name: "sl-start",
              reactName: "onSlStart",
              eventName: "SlStartEvent",
            },
          ],
          attributes: [
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "'none'",
              description:
                "The name of the built-in animation to use. For custom animations, use the `keyframes` prop.",
              fieldName: "name",
            },
            {
              name: "play",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Plays the animation. When omitted, the animation will be paused. This attribute will be automatically removed when\nthe animation finishes or gets canceled.",
              fieldName: "play",
            },
            {
              name: "delay",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The number of milliseconds to delay the start of the animation.",
              fieldName: "delay",
            },
            {
              name: "direction",
              type: {
                text: "PlaybackDirection",
              },
              default: "'normal'",
              description:
                "Determines the direction of playback as well as the behavior when reaching the end of an iteration.\n[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)",
              fieldName: "direction",
            },
            {
              name: "duration",
              type: {
                text: "number",
              },
              default: "1000",
              description:
                "The number of milliseconds each iteration of the animation takes to complete.",
              fieldName: "duration",
            },
            {
              name: "easing",
              type: {
                text: "string",
              },
              default: "'linear'",
              description:
                "The easing function to use for the animation. This can be a Shoelace easing function or a custom easing function\nsuch as `cubic-bezier(0, 1, .76, 1.14)`.",
              fieldName: "easing",
            },
            {
              name: "end-delay",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The number of milliseconds to delay after the active period of an animation sequence.",
              fieldName: "endDelay",
            },
            {
              name: "fill",
              type: {
                text: "FillMode",
              },
              default: "'auto'",
              description:
                "Sets how the animation applies styles to its target before and after its execution.",
              fieldName: "fill",
            },
            {
              name: "iterations",
              default: "Infinity",
              description:
                "The number of iterations to run before the animation completes. Defaults to `Infinity`, which loops.",
              fieldName: "iterations",
            },
            {
              name: "iteration-start",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The offset at which to start the animation, usually between 0 (start) and 1 (end).",
              fieldName: "iterationStart",
            },
            {
              name: "playback-rate",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "Sets the animation's playback rate. The default is `1`, which plays the animation at a normal speed. Setting this\nto `2`, for example, will double the animation's speed. A negative value can be used to reverse the animation. This\nvalue can be changed without causing the animation to restart.",
              fieldName: "playbackRate",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).",
          tagNameWithoutPrefix: "animation",
          tagName: "sl-animation",
          customElement: true,
          jsDoc:
            "/**\n * @summary Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes. Powered by the [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API).\n * @documentation https://shoelace.style/components/animation\n * @status stable\n * @since 2.0\n *\n * @event sl-cancel - Emitted when the animation is canceled.\n * @event sl-finish - Emitted when the animation finishes.\n * @event sl-start - Emitted when the animation starts or restarts.\n *\n * @slot - The element to animate. Avoid slotting in more than one element, as subsequent ones will be ignored. To\n *  animate multiple elements, either wrap them in a single container or use multiple `<sl-animation>` elements.\n */",
          documentation: "https://shoelace.style/components/animation",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlAnimation",
            module: "components/animation/animation.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/avatar/avatar.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlAvatar",
          cssProperties: [
            {
              description: "The size of the avatar.",
              name: "--size",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The container that wraps the avatar's icon.",
              name: "icon",
            },
            {
              description: "The container that wraps the avatar's initials.",
              name: "initials",
            },
            {
              description:
                "The avatar image. Only shown when the `image` attribute is set.",
              name: "image",
            },
          ],
          slots: [
            {
              description:
                "The default icon to use when no image or initials are present. Works best with `<sl-icon>`.",
              name: "icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "hasError",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "image",
              type: {
                text: "string",
              },
              default: "''",
              description: "The image source to use for the avatar.",
              attribute: "image",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A label to use to describe the avatar to assistive devices.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "initials",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Initials to use as a fallback when no image is available (1-2 characters max recommended).",
              attribute: "initials",
            },
            {
              kind: "field",
              name: "loading",
              type: {
                text: "'eager' | 'lazy'",
              },
              default: "'eager'",
              description: "Indicates how the browser should load the image.",
              attribute: "loading",
            },
            {
              kind: "field",
              name: "shape",
              type: {
                text: "'circle' | 'square' | 'rounded'",
              },
              default: "'circle'",
              description: "The shape of the avatar.",
              attribute: "shape",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleImageChange",
            },
            {
              kind: "method",
              name: "handleImageLoadError",
              privacy: "private",
            },
          ],
          events: [
            {
              description:
                "The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some unknown cause.",
              name: "sl-error",
              reactName: "onSlError",
              eventName: "SlErrorEvent",
            },
          ],
          attributes: [
            {
              name: "image",
              type: {
                text: "string",
              },
              default: "''",
              description: "The image source to use for the avatar.",
              fieldName: "image",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A label to use to describe the avatar to assistive devices.",
              fieldName: "label",
            },
            {
              name: "initials",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Initials to use as a fallback when no image is available (1-2 characters max recommended).",
              fieldName: "initials",
            },
            {
              name: "loading",
              type: {
                text: "'eager' | 'lazy'",
              },
              default: "'eager'",
              description: "Indicates how the browser should load the image.",
              fieldName: "loading",
            },
            {
              name: "shape",
              type: {
                text: "'circle' | 'square' | 'rounded'",
              },
              default: "'circle'",
              description: "The shape of the avatar.",
              fieldName: "shape",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Avatars are used to represent a person or object.",
          tagNameWithoutPrefix: "avatar",
          tagName: "sl-avatar",
          customElement: true,
          jsDoc:
            "/**\n * @summary Avatars are used to represent a person or object.\n * @documentation https://shoelace.style/components/avatar\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @event sl-error - The image could not be loaded. This may because of an invalid URL, a temporary network condition, or some\n * unknown cause.\n *\n * @slot icon - The default icon to use when no image or initials are present. Works best with `<sl-icon>`.\n *\n * @csspart base - The component's base wrapper.\n * @csspart icon - The container that wraps the avatar's icon.\n * @csspart initials - The container that wraps the avatar's initials.\n * @csspart image - The avatar image. Only shown when the `image` attribute is set.\n *\n * @cssproperty --size - The size of the avatar.\n */",
          documentation: "https://shoelace.style/components/avatar",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlAvatar",
            module: "components/avatar/avatar.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/badge/badge.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlBadge",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          slots: [
            {
              description: "The badge's content.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "variant",
              type: {
                text: "'primary' | 'success' | 'neutral' | 'warning' | 'danger'",
              },
              default: "'primary'",
              description: "The badge's theme variant.",
              attribute: "variant",
              reflects: true,
            },
            {
              kind: "field",
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style badge with rounded edges.",
              attribute: "pill",
              reflects: true,
            },
            {
              kind: "field",
              name: "pulse",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the badge pulsate to draw attention.",
              attribute: "pulse",
              reflects: true,
            },
          ],
          attributes: [
            {
              name: "variant",
              type: {
                text: "'primary' | 'success' | 'neutral' | 'warning' | 'danger'",
              },
              default: "'primary'",
              description: "The badge's theme variant.",
              fieldName: "variant",
            },
            {
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style badge with rounded edges.",
              fieldName: "pill",
            },
            {
              name: "pulse",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the badge pulsate to draw attention.",
              fieldName: "pulse",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Badges are used to draw attention and display statuses or counts.",
          tagNameWithoutPrefix: "badge",
          tagName: "sl-badge",
          customElement: true,
          jsDoc:
            "/**\n * @summary Badges are used to draw attention and display statuses or counts.\n * @documentation https://shoelace.style/components/badge\n * @status stable\n * @since 2.0\n *\n * @slot - The badge's content.\n *\n * @csspart base - The component's base wrapper.\n */",
          documentation: "https://shoelace.style/components/badge",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlBadge",
            module: "components/badge/badge.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/breadcrumb-item/breadcrumb-item.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlBreadcrumbItem",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The breadcrumb item's label.",
              name: "label",
            },
            {
              description: "The container that wraps the prefix.",
              name: "prefix",
            },
            {
              description: "The container that wraps the suffix.",
              name: "suffix",
            },
            {
              description: "The container that wraps the separator.",
              name: "separator",
            },
          ],
          slots: [
            {
              description: "The breadcrumb item's label.",
              name: "",
            },
            {
              description:
                "An optional prefix, usually an icon or icon button.",
              name: "prefix",
            },
            {
              description:
                "An optional suffix, usually an icon or icon button.",
              name: "suffix",
            },
            {
              description:
                "The separator to use for the breadcrumb item. This will only change the separator for this item. If you want to change it for all items in the group, set the separator on `<sl-breadcrumb>` instead.",
              name: "separator",
            },
          ],
          members: [
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'prefix', 'suffix')",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "renderType",
              type: {
                text: "'button' | 'link' | 'dropdown'",
              },
              privacy: "private",
              default: "'button'",
            },
            {
              kind: "field",
              name: "href",
              type: {
                text: "string | undefined",
              },
              description:
                "Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered\ninternally. When unset, a button will be rendered instead.",
              attribute: "href",
            },
            {
              kind: "field",
              name: "target",
              type: {
                text: "'_blank' | '_parent' | '_self' | '_top' | undefined",
              },
              description:
                "Tells the browser where to open the link. Only used when `href` is set.",
              attribute: "target",
            },
            {
              kind: "field",
              name: "rel",
              type: {
                text: "string",
              },
              default: "'noreferrer noopener'",
              description:
                "The `rel` attribute to use on the link. Only used when `href` is set.",
              attribute: "rel",
            },
            {
              kind: "method",
              name: "setRenderType",
              privacy: "private",
            },
            {
              kind: "method",
              name: "hrefChanged",
            },
            {
              kind: "method",
              name: "handleSlotChange",
            },
          ],
          attributes: [
            {
              name: "href",
              type: {
                text: "string | undefined",
              },
              description:
                "Optional URL to direct the user to when the breadcrumb item is activated. When set, a link will be rendered\ninternally. When unset, a button will be rendered instead.",
              fieldName: "href",
            },
            {
              name: "target",
              type: {
                text: "'_blank' | '_parent' | '_self' | '_top' | undefined",
              },
              description:
                "Tells the browser where to open the link. Only used when `href` is set.",
              fieldName: "target",
            },
            {
              name: "rel",
              type: {
                text: "string",
              },
              default: "'noreferrer noopener'",
              description:
                "The `rel` attribute to use on the link. Only used when `href` is set.",
              fieldName: "rel",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.",
          tagNameWithoutPrefix: "breadcrumb-item",
          tagName: "sl-breadcrumb-item",
          customElement: true,
          jsDoc:
            "/**\n * @summary Breadcrumb Items are used inside [breadcrumbs](/components/breadcrumb) to represent different links.\n * @documentation https://shoelace.style/components/breadcrumb-item\n * @status stable\n * @since 2.0\n *\n * @slot - The breadcrumb item's label.\n * @slot prefix - An optional prefix, usually an icon or icon button.\n * @slot suffix - An optional suffix, usually an icon or icon button.\n * @slot separator - The separator to use for the breadcrumb item. This will only change the separator for this item. If\n * you want to change it for all items in the group, set the separator on `<sl-breadcrumb>` instead.\n *\n * @csspart base - The component's base wrapper.\n * @csspart label - The breadcrumb item's label.\n * @csspart prefix - The container that wraps the prefix.\n * @csspart suffix - The container that wraps the suffix.\n * @csspart separator - The container that wraps the separator.\n */",
          documentation: "https://shoelace.style/components/breadcrumb-item",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlBreadcrumbItem",
            module: "components/breadcrumb-item/breadcrumb-item.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/breadcrumb/breadcrumb.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlBreadcrumb",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          slots: [
            {
              description: "One or more breadcrumb items to display.",
              name: "",
            },
            {
              description:
                "The separator to use between breadcrumb items. Works best with `<sl-icon>`.",
              name: "separator",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "separatorDir",
              privacy: "private",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "separatorSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by\nscreen readers and other assistive devices to provide more context for users.",
              attribute: "label",
            },
            {
              kind: "method",
              name: "getSeparator",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleSlotChange",
              privacy: "private",
            },
          ],
          attributes: [
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The label to use for the breadcrumb control. This will not be shown on the screen, but it will be announced by\nscreen readers and other assistive devices to provide more context for users.",
              fieldName: "label",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.",
          tagNameWithoutPrefix: "breadcrumb",
          tagName: "sl-breadcrumb",
          customElement: true,
          jsDoc:
            "/**\n * @summary Breadcrumbs provide a group of links so users can easily navigate a website's hierarchy.\n * @documentation https://shoelace.style/components/breadcrumb\n * @status stable\n * @since 2.0\n *\n * @slot - One or more breadcrumb items to display.\n * @slot separator - The separator to use between breadcrumb items. Works best with `<sl-icon>`.\n *\n * @dependency sl-icon\n *\n * @csspart base - The component's base wrapper.\n */",
          documentation: "https://shoelace.style/components/breadcrumb",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlBreadcrumb",
            module: "components/breadcrumb/breadcrumb.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/button/button.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlButton",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The container that wraps the prefix.",
              name: "prefix",
            },
            {
              description: "The button's label.",
              name: "label",
            },
            {
              description: "The container that wraps the suffix.",
              name: "suffix",
            },
            {
              description: "The button's caret icon, an `<sl-icon>` element.",
              name: "caret",
            },
            {
              description:
                "The spinner that shows when the button is in the loading state.",
              name: "spinner",
            },
          ],
          slots: [
            {
              description: "The button's label.",
              name: "",
            },
            {
              description: "A presentational prefix icon or similar element.",
              name: "prefix",
            },
            {
              description: "A presentational suffix icon or similar element.",
              name: "suffix",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon, 'sl-spinner': SlSpinner }",
            },
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default:
                "new FormControlController(this, { assumeInteractionOn: ['click'] })",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default:
                "new HasSlotController(this, '[default]', 'prefix', 'suffix')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "button",
              type: {
                text: "HTMLButtonElement | HTMLLinkElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "invalid",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              attribute: "title",
            },
            {
              kind: "field",
              name: "variant",
              type: {
                text: "'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'",
              },
              default: "'default'",
              description: "The button's theme variant.",
              attribute: "variant",
              reflects: true,
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The button's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "caret",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.",
              attribute: "caret",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the button.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "loading",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the button in a loading state.",
              attribute: "loading",
              reflects: true,
            },
            {
              kind: "field",
              name: "outline",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws an outlined button.",
              attribute: "outline",
              reflects: true,
            },
            {
              kind: "field",
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style button with rounded edges.",
              attribute: "pill",
              reflects: true,
            },
            {
              kind: "field",
              name: "circle",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the\ndefault slot.",
              attribute: "circle",
              reflects: true,
            },
            {
              kind: "field",
              name: "type",
              type: {
                text: "'button' | 'submit' | 'reset'",
              },
              default: "'button'",
              description:
                "The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native\n`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.",
              attribute: "type",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.\nThis attribute is ignored when `href` is present.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The value of the button, submitted as a pair with the button's name as part of the form data, but only when this\nbutton is the submitter. This attribute is ignored when `href` is present.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "href",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",
              attribute: "href",
            },
            {
              kind: "field",
              name: "target",
              type: {
                text: "'_blank' | '_parent' | '_self' | '_top'",
              },
              description:
                "Tells the browser where to open the link. Only used when `href` is present.",
              attribute: "target",
            },
            {
              kind: "field",
              name: "rel",
              type: {
                text: "string",
              },
              default: "'noreferrer noopener'",
              description:
                "When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the\ndefault is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a\nspecific tab/window, this will prevent that from working correctly. You can remove or change the default value by\nsetting the attribute to an empty string or a value of your choice, respectively.",
              attribute: "rel",
            },
            {
              kind: "field",
              name: "download",
              type: {
                text: "string | undefined",
              },
              description:
                "Tells the browser to download the linked file as this filename. Only used when `href` is present.",
              attribute: "download",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              description:
                'The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The\nvalue of this attribute must be an id of a form in the same document or shadow root as the button.',
              attribute: "form",
            },
            {
              kind: "field",
              name: "formAction",
              type: {
                text: "string",
              },
              description:
                "Used to override the form owner's `action` attribute.",
              attribute: "formaction",
            },
            {
              kind: "field",
              name: "formEnctype",
              type: {
                text: "'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'",
              },
              description:
                "Used to override the form owner's `enctype` attribute.",
              attribute: "formenctype",
            },
            {
              kind: "field",
              name: "formMethod",
              type: {
                text: "'post' | 'get'",
              },
              description:
                "Used to override the form owner's `method` attribute.",
              attribute: "formmethod",
            },
            {
              kind: "field",
              name: "formNoValidate",
              type: {
                text: "boolean",
              },
              description:
                "Used to override the form owner's `novalidate` attribute.",
              attribute: "formnovalidate",
            },
            {
              kind: "field",
              name: "formTarget",
              type: {
                text: "'_self' | '_blank' | '_parent' | '_top' | string",
              },
              description:
                "Used to override the form owner's `target` attribute.",
              attribute: "formtarget",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "isButton",
              privacy: "private",
            },
            {
              kind: "method",
              name: "isLink",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "click",
              description: "Simulates a click on the button.",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the button.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the button.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
          ],
          events: [
            {
              description: "Emitted when the button loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the button gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              fieldName: "title",
            },
            {
              name: "variant",
              type: {
                text: "'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'",
              },
              default: "'default'",
              description: "The button's theme variant.",
              fieldName: "variant",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The button's size.",
              fieldName: "size",
            },
            {
              name: "caret",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior.",
              fieldName: "caret",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the button.",
              fieldName: "disabled",
            },
            {
              name: "loading",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the button in a loading state.",
              fieldName: "loading",
            },
            {
              name: "outline",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws an outlined button.",
              fieldName: "outline",
            },
            {
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style button with rounded edges.",
              fieldName: "pill",
            },
            {
              name: "circle",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws a circular icon button. When this attribute is present, the button expects a single `<sl-icon>` in the\ndefault slot.",
              fieldName: "circle",
            },
            {
              name: "type",
              type: {
                text: "'button' | 'submit' | 'reset'",
              },
              default: "'button'",
              description:
                "The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native\n`<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.",
              fieldName: "type",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.\nThis attribute is ignored when `href` is present.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The value of the button, submitted as a pair with the button's name as part of the form data, but only when this\nbutton is the submitter. This attribute is ignored when `href` is present.",
              fieldName: "value",
            },
            {
              name: "href",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",
              fieldName: "href",
            },
            {
              name: "target",
              type: {
                text: "'_blank' | '_parent' | '_self' | '_top'",
              },
              description:
                "Tells the browser where to open the link. Only used when `href` is present.",
              fieldName: "target",
            },
            {
              name: "rel",
              type: {
                text: "string",
              },
              default: "'noreferrer noopener'",
              description:
                "When using `href`, this attribute will map to the underlying link's `rel` attribute. Unlike regular links, the\ndefault is `noreferrer noopener` to prevent security exploits. However, if you're using `target` to point to a\nspecific tab/window, this will prevent that from working correctly. You can remove or change the default value by\nsetting the attribute to an empty string or a value of your choice, respectively.",
              fieldName: "rel",
            },
            {
              name: "download",
              type: {
                text: "string | undefined",
              },
              description:
                "Tells the browser to download the linked file as this filename. Only used when `href` is present.",
              fieldName: "download",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              description:
                'The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The\nvalue of this attribute must be an id of a form in the same document or shadow root as the button.',
              fieldName: "form",
            },
            {
              name: "formaction",
              type: {
                text: "string",
              },
              description:
                "Used to override the form owner's `action` attribute.",
              fieldName: "formAction",
            },
            {
              name: "formenctype",
              type: {
                text: "'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'",
              },
              description:
                "Used to override the form owner's `enctype` attribute.",
              fieldName: "formEnctype",
            },
            {
              name: "formmethod",
              type: {
                text: "'post' | 'get'",
              },
              description:
                "Used to override the form owner's `method` attribute.",
              fieldName: "formMethod",
            },
            {
              name: "formnovalidate",
              type: {
                text: "boolean",
              },
              description:
                "Used to override the form owner's `novalidate` attribute.",
              fieldName: "formNoValidate",
            },
            {
              name: "formtarget",
              type: {
                text: "'_self' | '_blank' | '_parent' | '_top' | string",
              },
              description:
                "Used to override the form owner's `target` attribute.",
              fieldName: "formTarget",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Buttons represent actions that are available to the user.",
          tagNameWithoutPrefix: "button",
          tagName: "sl-button",
          customElement: true,
          jsDoc:
            "/**\n * @summary Buttons represent actions that are available to the user.\n * @documentation https://shoelace.style/components/button\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n * @dependency sl-spinner\n *\n * @event sl-blur - Emitted when the button loses focus.\n * @event sl-focus - Emitted when the button gains focus.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @slot - The button's label.\n * @slot prefix - A presentational prefix icon or similar element.\n * @slot suffix - A presentational suffix icon or similar element.\n *\n * @csspart base - The component's base wrapper.\n * @csspart prefix - The container that wraps the prefix.\n * @csspart label - The button's label.\n * @csspart suffix - The container that wraps the suffix.\n * @csspart caret - The button's caret icon, an `<sl-icon>` element.\n * @csspart spinner - The spinner that shows when the button is in the loading state.\n */",
          documentation: "https://shoelace.style/components/button",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon", "sl-spinner"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlButton",
            module: "components/button/button.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/button-group/button-group.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlButtonGroup",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          slots: [
            {
              description:
                "One or more `<sl-button>` elements to display in the button group.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "disableRole",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive\ndevices when interacting with the control and is strongly recommended.",
              attribute: "label",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseOver",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseOut",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleSlotChange",
              privacy: "private",
            },
          ],
          attributes: [
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A label to use for the button group. This won't be displayed on the screen, but it will be announced by assistive\ndevices when interacting with the control and is strongly recommended.",
              fieldName: "label",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Button groups can be used to group related buttons into sections.",
          tagNameWithoutPrefix: "button-group",
          tagName: "sl-button-group",
          customElement: true,
          jsDoc:
            "/**\n * @summary Button groups can be used to group related buttons into sections.\n * @documentation https://shoelace.style/components/button-group\n * @status stable\n * @since 2.0\n *\n * @slot - One or more `<sl-button>` elements to display in the button group.\n *\n * @csspart base - The component's base wrapper.\n */",
          documentation: "https://shoelace.style/components/button-group",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlButtonGroup",
            module: "components/button-group/button-group.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/card/card.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlCard",
          cssProperties: [
            {
              description:
                "The card's border color, including borders that occur inside the card.",
              name: "--border-color",
            },
            {
              description: "The border radius for the card's edges.",
              name: "--border-radius",
            },
            {
              description: "The width of the card's borders.",
              name: "--border-width",
            },
            {
              description: "The padding to use for the card's sections.",
              name: "--padding",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The container that wraps the card's image.",
              name: "image",
            },
            {
              description: "The container that wraps the card's header.",
              name: "header",
            },
            {
              description: "The container that wraps the card's main content.",
              name: "body",
            },
            {
              description: "The container that wraps the card's footer.",
              name: "footer",
            },
          ],
          slots: [
            {
              description: "The card's main content.",
              name: "",
            },
            {
              description: "An optional header for the card.",
              name: "header",
            },
            {
              description: "An optional footer for the card.",
              name: "footer",
            },
            {
              description:
                "An optional image to render at the start of the card.",
              name: "image",
            },
          ],
          members: [
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default:
                "new HasSlotController(this, 'footer', 'header', 'image')",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Cards can be used to group related subjects in a container.",
          tagNameWithoutPrefix: "card",
          tagName: "sl-card",
          customElement: true,
          jsDoc:
            "/**\n * @summary Cards can be used to group related subjects in a container.\n * @documentation https://shoelace.style/components/card\n * @status stable\n * @since 2.0\n *\n * @slot - The card's main content.\n * @slot header - An optional header for the card.\n * @slot footer - An optional footer for the card.\n * @slot image - An optional image to render at the start of the card.\n *\n * @csspart base - The component's base wrapper.\n * @csspart image - The container that wraps the card's image.\n * @csspart header - The container that wraps the card's header.\n * @csspart body - The container that wraps the card's main content.\n * @csspart footer - The container that wraps the card's footer.\n *\n * @cssproperty --border-color - The card's border color, including borders that occur inside the card.\n * @cssproperty --border-radius - The border radius for the card's edges.\n * @cssproperty --border-width - The width of the card's borders.\n * @cssproperty --padding - The padding to use for the card's sections.\n */",
          documentation: "https://shoelace.style/components/card",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlCard",
            module: "components/card/card.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/carousel/carousel.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlCarousel",
          cssProperties: [
            {
              description: "The space between each slide.",
              name: "--slide-gap",
            },
            {
              description: "The aspect ratio of each slide.",
              name: "--aspect-ratio",
              default: "16/9",
            },
            {
              description:
                "The amount of padding to apply to the scroll area, allowing adjacent slides to become partially visible as a scroll hint.",
              name: "--scroll-hint",
            },
          ],
          cssParts: [
            {
              description: "The carousel's internal wrapper.",
              name: "base",
            },
            {
              description: "The scroll container that wraps the slides.",
              name: "scroll-container",
            },
            {
              description: "The pagination indicators wrapper.",
              name: "pagination",
            },
            {
              description: "The pagination indicator.",
              name: "pagination-item",
            },
            {
              description: "Applied when the item is active.",
              name: "pagination-item--active",
            },
            {
              description: "The navigation wrapper.",
              name: "navigation",
            },
            {
              description: "The navigation button.",
              name: "navigation-button",
            },
            {
              description: "Applied to the previous button.",
              name: "navigation-button--previous",
            },
            {
              description: "Applied to the next button.",
              name: "navigation-button--next",
            },
          ],
          slots: [
            {
              description:
                "The carousel's main content, one or more `<sl-carousel-item>` elements.",
              name: "",
            },
            {
              description:
                "Optional next icon to use instead of the default. Works best with `<sl-icon>`.",
              name: "next-icon",
            },
            {
              description:
                "Optional previous icon to use instead of the default. Works best with `<sl-icon>`.",
              name: "previous-icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "loop",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, allows the user to navigate the carousel in the same direction indefinitely.",
              attribute: "loop",
              reflects: true,
            },
            {
              kind: "field",
              name: "navigation",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "When set, show the carousel's navigation.",
              attribute: "navigation",
              reflects: true,
            },
            {
              kind: "field",
              name: "pagination",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, show the carousel's pagination indicators.",
              attribute: "pagination",
              reflects: true,
            },
            {
              kind: "field",
              name: "autoplay",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, the slides will scroll automatically when the user is not interacting with them.",
              attribute: "autoplay",
              reflects: true,
            },
            {
              kind: "field",
              name: "autoplayInterval",
              type: {
                text: "number",
              },
              default: "3000",
              description:
                "Specifies the amount of time, in milliseconds, between each automatic scroll.",
              attribute: "autoplay-interval",
            },
            {
              kind: "field",
              name: "slidesPerPage",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "Specifies how many slides should be shown at a given time.",
              attribute: "slides-per-page",
            },
            {
              kind: "field",
              name: "slidesPerMove",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`\ngreater than one. It can't be higher than `slides-per-page`.",
              attribute: "slides-per-move",
            },
            {
              kind: "field",
              name: "orientation",
              type: {
                text: "'horizontal' | 'vertical'",
              },
              default: "'horizontal'",
              description:
                "Specifies the orientation in which the carousel will lay out.",
              attribute: "orientation",
            },
            {
              kind: "field",
              name: "mouseDragging",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, it is possible to scroll through the slides by dragging them with the mouse.",
              attribute: "mouse-dragging",
              reflects: true,
            },
            {
              kind: "field",
              name: "scrollContainer",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "paginationContainer",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "activeSlide",
              type: {
                text: "number",
              },
              default: "0",
            },
            {
              kind: "field",
              name: "scrolling",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "dragging",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "autoplayController",
              privacy: "private",
              default: "new AutoplayController(this, () => this.next())",
            },
            {
              kind: "field",
              name: "dragStartPosition",
              type: {
                text: "[number, number]",
              },
              privacy: "private",
              default: "[-1, -1]",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "mutationObserver",
              type: {
                text: "MutationObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "pendingSlideChange",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "method",
              name: "getPageCount",
              privacy: "private",
            },
            {
              kind: "method",
              name: "getCurrentPage",
              privacy: "private",
            },
            {
              kind: "method",
              name: "canScrollNext",
              privacy: "private",
              return: {
                type: {
                  text: "boolean",
                },
              },
            },
            {
              kind: "method",
              name: "canScrollPrev",
              privacy: "private",
              return: {
                type: {
                  text: "boolean",
                },
              },
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseDragStart",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "PointerEvent",
                  },
                },
              ],
            },
            {
              kind: "field",
              name: "handleMouseDrag",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleMouseDragEnd",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleScroll",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleScrollEnd",
              privacy: "private",
            },
            {
              kind: "method",
              name: "isCarouselItem",
              privacy: "private",
              return: {
                type: {
                  text: "node is SlCarouselItem",
                },
              },
              parameters: [
                {
                  name: "node",
                  type: {
                    text: "Node",
                  },
                },
              ],
            },
            {
              kind: "field",
              name: "handleSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "initializeSlides",
            },
            {
              kind: "method",
              name: "createClones",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleSlideChange",
            },
            {
              kind: "method",
              name: "updateSlidesSnap",
            },
            {
              kind: "method",
              name: "handleAutoplayChange",
            },
            {
              kind: "method",
              name: "previous",
              parameters: [
                {
                  name: "behavior",
                  default: "'smooth'",
                  type: {
                    text: "ScrollBehavior",
                  },
                  description: "The behavior used for scrolling.",
                },
              ],
              description:
                "Move the carousel backward by `slides-per-move` slides.",
            },
            {
              kind: "method",
              name: "next",
              parameters: [
                {
                  name: "behavior",
                  default: "'smooth'",
                  type: {
                    text: "ScrollBehavior",
                  },
                  description: "The behavior used for scrolling.",
                },
              ],
              description:
                "Move the carousel forward by `slides-per-move` slides.",
            },
            {
              kind: "method",
              name: "goToSlide",
              parameters: [
                {
                  name: "index",
                  type: {
                    text: "number",
                  },
                  description: "The slide index.",
                },
                {
                  name: "behavior",
                  default: "'smooth'",
                  type: {
                    text: "ScrollBehavior",
                  },
                  description: "The behavior used for scrolling.",
                },
              ],
              description:
                "Scrolls the carousel to the slide specified by `index`.",
            },
            {
              kind: "method",
              name: "scrollToSlide",
              privacy: "private",
              parameters: [
                {
                  name: "slide",
                  type: {
                    text: "HTMLElement",
                  },
                },
                {
                  name: "behavior",
                  default: "'smooth'",
                  type: {
                    text: "ScrollBehavior",
                  },
                },
              ],
            },
          ],
          events: [
            {
              type: {
                text: "{ index: number, slide: SlCarouselItem }",
              },
              description: "Emitted when the active slide changes.",
              name: "sl-slide-change",
              reactName: "onSlSlideChange",
              eventName: "SlSlideChangeEvent",
            },
          ],
          attributes: [
            {
              name: "loop",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, allows the user to navigate the carousel in the same direction indefinitely.",
              fieldName: "loop",
            },
            {
              name: "navigation",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "When set, show the carousel's navigation.",
              fieldName: "navigation",
            },
            {
              name: "pagination",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, show the carousel's pagination indicators.",
              fieldName: "pagination",
            },
            {
              name: "autoplay",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, the slides will scroll automatically when the user is not interacting with them.",
              fieldName: "autoplay",
            },
            {
              name: "autoplay-interval",
              type: {
                text: "number",
              },
              default: "3000",
              description:
                "Specifies the amount of time, in milliseconds, between each automatic scroll.",
              fieldName: "autoplayInterval",
            },
            {
              name: "slides-per-page",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "Specifies how many slides should be shown at a given time.",
              fieldName: "slidesPerPage",
            },
            {
              name: "slides-per-move",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "Specifies the number of slides the carousel will advance when scrolling, useful when specifying a `slides-per-page`\ngreater than one. It can't be higher than `slides-per-page`.",
              fieldName: "slidesPerMove",
            },
            {
              name: "orientation",
              type: {
                text: "'horizontal' | 'vertical'",
              },
              default: "'horizontal'",
              description:
                "Specifies the orientation in which the carousel will lay out.",
              fieldName: "orientation",
            },
            {
              name: "mouse-dragging",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, it is possible to scroll through the slides by dragging them with the mouse.",
              fieldName: "mouseDragging",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Carousels display an arbitrary number of content slides along a horizontal or vertical axis.",
          tagNameWithoutPrefix: "carousel",
          tagName: "sl-carousel",
          customElement: true,
          jsDoc:
            "/**\n * @summary Carousels display an arbitrary number of content slides along a horizontal or vertical axis.\n *\n * @since 2.2\n * @status experimental\n *\n * @dependency sl-icon\n *\n * @event {{ index: number, slide: SlCarouselItem }} sl-slide-change - Emitted when the active slide changes.\n *\n * @slot - The carousel's main content, one or more `<sl-carousel-item>` elements.\n * @slot next-icon - Optional next icon to use instead of the default. Works best with `<sl-icon>`.\n * @slot previous-icon - Optional previous icon to use instead of the default. Works best with `<sl-icon>`.\n *\n * @csspart base - The carousel's internal wrapper.\n * @csspart scroll-container - The scroll container that wraps the slides.\n * @csspart pagination - The pagination indicators wrapper.\n * @csspart pagination-item - The pagination indicator.\n * @csspart pagination-item--active - Applied when the item is active.\n * @csspart navigation - The navigation wrapper.\n * @csspart navigation-button - The navigation button.\n * @csspart navigation-button--previous - Applied to the previous button.\n * @csspart navigation-button--next - Applied to the next button.\n *\n * @cssproperty --slide-gap - The space between each slide.\n * @cssproperty [--aspect-ratio=16/9] - The aspect ratio of each slide.\n * @cssproperty --scroll-hint - The amount of padding to apply to the scroll area, allowing adjacent slides to become\n *  partially visible as a scroll hint.\n */",
          since: "2.2",
          status: "experimental",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlCarousel",
            module: "components/carousel/carousel.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/carousel-item/carousel-item.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlCarouselItem",
          cssProperties: [
            {
              description:
                "The slide's aspect ratio. Inherited from the carousel by default.",
              name: "--aspect-ratio",
            },
          ],
          slots: [
            {
              description: "The carousel item's content..",
              name: "",
            },
          ],
          members: [],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "A carousel item represent a slide within a [carousel](/components/carousel).",
          tagNameWithoutPrefix: "carousel-item",
          tagName: "sl-carousel-item",
          customElement: true,
          jsDoc:
            "/**\n * @summary A carousel item represent a slide within a [carousel](/components/carousel).\n *\n * @since 2.0\n * @status experimental\n *\n * @slot - The carousel item's content..\n *\n * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.\n *\n */",
          since: "2.0",
          status: "experimental",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlCarouselItem",
            module: "components/carousel-item/carousel-item.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/checkbox/checkbox.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlCheckbox",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The square container that wraps the checkbox's checked state.",
              name: "control",
            },
            {
              description:
                "Matches the control part when the checkbox is checked.",
              name: "control--checked",
            },
            {
              description:
                "Matches the control part when the checkbox is indeterminate.",
              name: "control--indeterminate",
            },
            {
              description: "The checked icon, an `<sl-icon>` element.",
              name: "checked-icon",
            },
            {
              description: "The indeterminate icon, an `<sl-icon>` element.",
              name: "indeterminate-icon",
            },
            {
              description: "The container that wraps the checkbox's label.",
              name: "label",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
          ],
          slots: [
            {
              description: "The checkbox's label.",
              name: "",
            },
            {
              description:
                "Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default:
                "new FormControlController(this, { value: (control: SlCheckbox) => (control.checked ? control.value || 'on' : undefined), defaultValue: (control: SlCheckbox) => control.defaultChecked, setValue: (control: SlCheckbox, checked: boolean) => (control.checked = checked) })",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text')",
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              attribute: "title",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the checkbox, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The current value of the checkbox, submitted as a name/value pair with form data.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The checkbox's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the checkbox.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the checkbox in a checked state.",
              attribute: "checked",
              reflects: true,
            },
            {
              kind: "field",
              name: "indeterminate",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                'Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select\nall/none" behavior when associated checkboxes have a mix of checked and unchecked states.',
              attribute: "indeterminate",
              reflects: true,
            },
            {
              kind: "field",
              name: "defaultChecked",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the checkbox a required field.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInput",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleStateChange",
            },
            {
              kind: "method",
              name: "click",
              description: "Simulates a click on the checkbox.",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the checkbox.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the checkbox.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. The value provided will be shown to the user when the form is submitted. To clear\nthe custom validation message, call this method with an empty string.",
            },
          ],
          events: [
            {
              description: "Emitted when the checkbox loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the checked state changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the checkbox gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description: "Emitted when the checkbox receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              fieldName: "title",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the checkbox, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The current value of the checkbox, submitted as a name/value pair with form data.",
              fieldName: "value",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The checkbox's size.",
              fieldName: "size",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the checkbox.",
              fieldName: "disabled",
            },
            {
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the checkbox in a checked state.",
              fieldName: "checked",
            },
            {
              name: "indeterminate",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                'Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select\nall/none" behavior when associated checkboxes have a mix of checked and unchecked states.',
              fieldName: "indeterminate",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the checkbox a required field.",
              fieldName: "required",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The checkbox's help text. If you need to display HTML, use the `help-text` slot instead.",
              fieldName: "helpText",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Checkboxes allow the user to toggle an option on or off.",
          tagNameWithoutPrefix: "checkbox",
          tagName: "sl-checkbox",
          customElement: true,
          jsDoc:
            "/**\n * @summary Checkboxes allow the user to toggle an option on or off.\n * @documentation https://shoelace.style/components/checkbox\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @slot - The checkbox's label.\n * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-blur - Emitted when the checkbox loses focus.\n * @event sl-change - Emitted when the checked state changes.\n * @event sl-focus - Emitted when the checkbox gains focus.\n * @event sl-input - Emitted when the checkbox receives input.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart base - The component's base wrapper.\n * @csspart control - The square container that wraps the checkbox's checked state.\n * @csspart control--checked - Matches the control part when the checkbox is checked.\n * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.\n * @csspart checked-icon - The checked icon, an `<sl-icon>` element.\n * @csspart indeterminate-icon - The indeterminate icon, an `<sl-icon>` element.\n * @csspart label - The container that wraps the checkbox's label.\n * @csspart form-control-help-text - The help text's wrapper.\n */",
          documentation: "https://shoelace.style/components/checkbox",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlCheckbox",
            module: "components/checkbox/checkbox.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/color-picker/color-picker.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlColorPicker",
          cssProperties: [
            {
              description: "The width of the color grid.",
              name: "--grid-width",
            },
            {
              description: "The height of the color grid.",
              name: "--grid-height",
            },
            {
              description: "The size of the color grid's handle.",
              name: "--grid-handle-size",
            },
            {
              description: "The height of the hue and alpha sliders.",
              name: "--slider-height",
            },
            {
              description: "The diameter of the slider's handle.",
              name: "--slider-handle-size",
            },
            {
              description: "The size of each predefined color swatch.",
              name: "--swatch-size",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The color picker's dropdown trigger.",
              name: "trigger",
            },
            {
              description: "The container that holds the swatches.",
              name: "swatches",
            },
            {
              description: "Each individual swatch.",
              name: "swatch",
            },
            {
              description: "The color grid.",
              name: "grid",
            },
            {
              description: "The color grid's handle.",
              name: "grid-handle",
            },
            {
              description: "Hue and opacity sliders.",
              name: "slider",
            },
            {
              description: "Hue and opacity slider handles.",
              name: "slider-handle",
            },
            {
              description: "The hue slider.",
              name: "hue-slider",
            },
            {
              description: "The hue slider's handle.",
              name: "hue-slider-handle",
            },
            {
              description: "The opacity slider.",
              name: "opacity-slider",
            },
            {
              description: "The opacity slider's handle.",
              name: "opacity-slider-handle",
            },
            {
              description: "The preview color.",
              name: "preview",
            },
            {
              description: "The text input.",
              name: "input",
            },
            {
              description: "The eye dropper button.",
              name: "eye-dropper-button",
            },
            {
              description: "The eye dropper button's exported `button` part.",
              name: "eye-dropper-button__base",
            },
            {
              description: "The eye dropper button's exported `prefix` part.",
              name: "eye-dropper-button__prefix",
            },
            {
              description: "The eye dropper button's exported `label` part.",
              name: "eye-dropper-button__label",
            },
            {
              description: "The eye dropper button's exported `suffix` part.",
              name: "eye-dropper-button__suffix",
            },
            {
              description: "The eye dropper button's exported `caret` part.",
              name: "eye-dropper-button__caret",
            },
            {
              description: "The format button.",
              name: "format-button",
            },
            {
              description: "The format button's exported `button` part.",
              name: "format-button__base",
            },
            {
              description: "The format button's exported `prefix` part.",
              name: "format-button__prefix",
            },
            {
              description: "The format button's exported `label` part.",
              name: "format-button__label",
            },
            {
              description: "The format button's exported `suffix` part.",
              name: "format-button__suffix",
            },
            {
              description: "The format button's exported `caret` part.",
              name: "format-button__caret",
            },
          ],
          slots: [
            {
              description:
                "The color picker's form label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default:
                "{ 'sl-button-group': SlButtonGroup, 'sl-button': SlButton, 'sl-dropdown': SlDropdown, 'sl-icon': SlIcon, 'sl-input': SlInput, 'sl-visually-hidden': SlVisuallyHidden }",
            },
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default: "new FormControlController(this)",
            },
            {
              kind: "field",
              name: "isSafeValue",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "base",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "SlInput",
              },
            },
            {
              kind: "field",
              name: "dropdown",
              type: {
                text: "SlDropdown",
              },
            },
            {
              kind: "field",
              name: "previewButton",
              type: {
                text: "HTMLButtonElement",
              },
            },
            {
              kind: "field",
              name: "trigger",
              type: {
                text: "HTMLButtonElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "isDraggingGridHandle",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "isEmpty",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "inputValue",
              type: {
                text: "string",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "hue",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "0",
            },
            {
              kind: "field",
              name: "saturation",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "100",
            },
            {
              kind: "field",
              name: "brightness",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "100",
            },
            {
              kind: "field",
              name: "alpha",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "100",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the color picker. The value's format will vary based the `format` attribute. To get the value\nin a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form\ndata.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "defaultValue",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to\ndisplay HTML, you can use the `label` slot` instead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "format",
              type: {
                text: "'hex' | 'rgb' | 'hsl' | 'hsv'",
              },
              default: "'hex'",
              description:
                "The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color\npicker will accept user input in any format (including CSS color names) and convert it to the desired format.",
              attribute: "format",
            },
            {
              kind: "field",
              name: "inline",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Renders the color picker inline rather than in a dropdown.",
              attribute: "inline",
              reflects: true,
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "Determines the size of the color picker's trigger. This has no effect on inline color pickers.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "noFormatToggle",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Removes the button that lets users toggle between format.",
              attribute: "no-format-toggle",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the form control, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the color picker.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",
              attribute: "hoist",
            },
            {
              kind: "field",
              name: "opacity",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.",
              attribute: "opacity",
            },
            {
              kind: "field",
              name: "uppercase",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "By default, values are lowercase. With this attribute, values will be uppercase instead.",
              attribute: "uppercase",
            },
            {
              kind: "field",
              name: "swatches",
              type: {
                text: "string | string[]",
              },
              default: "''",
              description:
                "One or more predefined color swatches to display as presets in the color picker. Can include any format the color\npicker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a\nsemicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.",
              attribute: "swatches",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the color picker a required field.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleCopy",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleFocusIn",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleFocusOut",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFormatToggle",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleAlphaDrag",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "PointerEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleHueDrag",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "PointerEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleGridDrag",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "PointerEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleAlphaKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleHueKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleGridKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleInputChange",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "SlChangeEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleInputInput",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "SlInputEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleInputKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleInputInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleTouchMove",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "TouchEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "parseColor",
              privacy: "private",
              parameters: [
                {
                  name: "colorString",
                  type: {
                    text: "string",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "setColor",
              privacy: "private",
              parameters: [
                {
                  name: "colorString",
                  type: {
                    text: "string",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "setLetterCase",
              privacy: "private",
              parameters: [
                {
                  name: "string",
                  type: {
                    text: "string",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "syncValues",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleAfterHide",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleEyeDropper",
              privacy: "private",
            },
            {
              kind: "method",
              name: "selectSwatch",
              privacy: "private",
              parameters: [
                {
                  name: "color",
                  type: {
                    text: "string",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "getHexString",
              privacy: "private",
              parameters: [
                {
                  name: "hue",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "saturation",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "brightness",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "alpha",
                  default: "100",
                },
              ],
              description:
                "Generates a hex string from HSV values. Hue must be 0-360. All other arguments must be 0-100.",
            },
            {
              kind: "method",
              name: "stopNestedEventPropagation",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "CustomEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleFormatChange",
            },
            {
              kind: "method",
              name: "handleOpacityChange",
            },
            {
              kind: "method",
              name: "handleValueChange",
              parameters: [
                {
                  name: "oldValue",
                  type: {
                    text: "string | undefined",
                  },
                },
                {
                  name: "newValue",
                  type: {
                    text: "string",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the color picker.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the color picker.",
            },
            {
              kind: "method",
              name: "getFormattedValue",
              parameters: [
                {
                  name: "format",
                  default: "'hex'",
                  type: {
                    text: "'hex' | 'hexa' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'hsv' | 'hsva'",
                  },
                },
              ],
              description:
                "Returns the current value as a string in the specified format.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
          ],
          events: [
            {
              description: "Emitted when the color picker loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the color picker's value changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the color picker receives focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description: "Emitted when the color picker receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the color picker. The value's format will vary based the `format` attribute. To get the value\nin a specific format, use the `getFormattedValue()` method. The value is submitted as a name/value pair with form\ndata.",
              fieldName: "value",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The color picker's label. This will not be displayed, but it will be announced by assistive devices. If you need to\ndisplay HTML, you can use the `label` slot` instead.",
              fieldName: "label",
            },
            {
              name: "format",
              type: {
                text: "'hex' | 'rgb' | 'hsl' | 'hsv'",
              },
              default: "'hex'",
              description:
                "The format to use. If opacity is enabled, these will translate to HEXA, RGBA, HSLA, and HSVA respectively. The color\npicker will accept user input in any format (including CSS color names) and convert it to the desired format.",
              fieldName: "format",
            },
            {
              name: "inline",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Renders the color picker inline rather than in a dropdown.",
              fieldName: "inline",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "Determines the size of the color picker's trigger. This has no effect on inline color pickers.",
              fieldName: "size",
            },
            {
              name: "no-format-toggle",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Removes the button that lets users toggle between format.",
              fieldName: "noFormatToggle",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the form control, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the color picker.",
              fieldName: "disabled",
            },
            {
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",
              fieldName: "hoist",
            },
            {
              name: "opacity",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Shows the opacity slider. Enabling this will cause the formatted value to be HEXA, RGBA, or HSLA.",
              fieldName: "opacity",
            },
            {
              name: "uppercase",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "By default, values are lowercase. With this attribute, values will be uppercase instead.",
              fieldName: "uppercase",
            },
            {
              name: "swatches",
              type: {
                text: "string | string[]",
              },
              default: "''",
              description:
                "One or more predefined color swatches to display as presets in the color picker. Can include any format the color\npicker can parse, including HEX(A), RGB(A), HSL(A), HSV(A), and CSS color names. Each color must be separated by a\nsemicolon (`;`). Alternatively, you can pass an array of color values to this property using JavaScript.",
              fieldName: "swatches",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the color picker a required field.",
              fieldName: "required",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Color pickers allow the user to select a color.",
          tagNameWithoutPrefix: "color-picker",
          tagName: "sl-color-picker",
          customElement: true,
          jsDoc:
            "/**\n * @summary Color pickers allow the user to select a color.\n * @documentation https://shoelace.style/components/color-picker\n * @status stable\n * @since 2.0\n *\n * @dependency sl-button\n * @dependency sl-button-group\n * @dependency sl-dropdown\n * @dependency sl-input\n * @dependency sl-visually-hidden\n *\n * @slot label - The color picker's form label. Alternatively, you can use the `label` attribute.\n *\n * @event sl-blur - Emitted when the color picker loses focus.\n * @event sl-change - Emitted when the color picker's value changes.\n * @event sl-focus - Emitted when the color picker receives focus.\n * @event sl-input - Emitted when the color picker receives input.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart base - The component's base wrapper.\n * @csspart trigger - The color picker's dropdown trigger.\n * @csspart swatches - The container that holds the swatches.\n * @csspart swatch - Each individual swatch.\n * @csspart grid - The color grid.\n * @csspart grid-handle - The color grid's handle.\n * @csspart slider - Hue and opacity sliders.\n * @csspart slider-handle - Hue and opacity slider handles.\n * @csspart hue-slider - The hue slider.\n * @csspart hue-slider-handle - The hue slider's handle.\n * @csspart opacity-slider - The opacity slider.\n * @csspart opacity-slider-handle - The opacity slider's handle.\n * @csspart preview - The preview color.\n * @csspart input - The text input.\n * @csspart eye-dropper-button - The eye dropper button.\n * @csspart eye-dropper-button__base - The eye dropper button's exported `button` part.\n * @csspart eye-dropper-button__prefix - The eye dropper button's exported `prefix` part.\n * @csspart eye-dropper-button__label - The eye dropper button's exported `label` part.\n * @csspart eye-dropper-button__suffix - The eye dropper button's exported `suffix` part.\n * @csspart eye-dropper-button__caret - The eye dropper button's exported `caret` part.\n * @csspart format-button - The format button.\n * @csspart format-button__base - The format button's exported `button` part.\n * @csspart format-button__prefix - The format button's exported `prefix` part.\n * @csspart format-button__label - The format button's exported `label` part.\n * @csspart format-button__suffix - The format button's exported `suffix` part.\n * @csspart format-button__caret - The format button's exported `caret` part.\n *\n * @cssproperty --grid-width - The width of the color grid.\n * @cssproperty --grid-height - The height of the color grid.\n * @cssproperty --grid-handle-size - The size of the color grid's handle.\n * @cssproperty --slider-height - The height of the hue and alpha sliders.\n * @cssproperty --slider-handle-size - The diameter of the slider's handle.\n * @cssproperty --swatch-size - The size of each predefined color swatch.\n */",
          documentation: "https://shoelace.style/components/color-picker",
          status: "stable",
          since: "2.0",
          dependencies: [
            "sl-button",
            "sl-button-group",
            "sl-dropdown",
            "sl-input",
            "sl-visually-hidden",
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlColorPicker",
            module: "components/color-picker/color-picker.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/copy-button/copy-button.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlCopyButton",
          cssProperties: [
            {
              description: "The color to use for success feedback.",
              name: "--success-color",
            },
            {
              description: "The color to use for error feedback.",
              name: "--error-color",
            },
          ],
          cssParts: [
            {
              description: "The internal `<button>` element.",
              name: "button",
            },
            {
              description: "The container that holds the copy icon.",
              name: "copy-icon",
            },
            {
              description: "The container that holds the success icon.",
              name: "success-icon",
            },
            {
              description: "The container that holds the error icon.",
              name: "error-icon",
            },
            {
              description: "The tooltip's exported `base` part.",
              name: "tooltip__base",
            },
            {
              description: "The tooltip's exported `popup` part.",
              name: "tooltip__base__popup",
            },
            {
              description: "The tooltip's exported `arrow` part.",
              name: "tooltip__base__arrow",
            },
            {
              description: "The tooltip's exported `body` part.",
              name: "tooltip__body",
            },
          ],
          slots: [
            {
              description:
                "The icon to show in the default copy state. Works best with `<sl-icon>`.",
              name: "copy-icon",
            },
            {
              description:
                "The icon to show when the content is copied. Works best with `<sl-icon>`.",
              name: "success-icon",
            },
            {
              description:
                "The icon to show when a copy error occurs. Works best with `<sl-icon>`.",
              name: "error-icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon, 'sl-tooltip': SlTooltip }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "copyIcon",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "successIcon",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "errorIcon",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "tooltip",
              type: {
                text: "SlTooltip",
              },
            },
            {
              kind: "field",
              name: "isCopying",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "status",
              type: {
                text: "'rest' | 'success' | 'error'",
              },
              default: "'rest'",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description: "The text value to copy.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "from",
              type: {
                text: "string",
              },
              default: "''",
              description:
                'An id that references an element in the same document from which data will be copied. If both this and `value` are\npresent, this value will take precedence. By default, the target element\'s `textContent` will be copied. To copy an\nattribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,\nappend a dot and the property name, e.g. `from="el.value"`.',
              attribute: "from",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the copy button.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "copyLabel",
              type: {
                text: "string",
              },
              default: "''",
              description: "A custom label to show in the tooltip.",
              attribute: "copy-label",
            },
            {
              kind: "field",
              name: "successLabel",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A custom label to show in the tooltip after copying.",
              attribute: "success-label",
            },
            {
              kind: "field",
              name: "errorLabel",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A custom label to show in the tooltip when a copy error occurs.",
              attribute: "error-label",
            },
            {
              kind: "field",
              name: "feedbackDuration",
              type: {
                text: "number",
              },
              default: "1000",
              description:
                "The length of time to show feedback before restoring the default trigger.",
              attribute: "feedback-duration",
            },
            {
              kind: "field",
              name: "tooltipPlacement",
              type: {
                text: "'top' | 'right' | 'bottom' | 'left'",
              },
              default: "'top'",
              description: "The preferred placement of the tooltip.",
              attribute: "tooltip-placement",
            },
            {
              kind: "field",
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",
              attribute: "hoist",
            },
            {
              kind: "method",
              name: "handleCopy",
              privacy: "private",
            },
            {
              kind: "method",
              name: "showStatus",
              privacy: "private",
              parameters: [
                {
                  name: "status",
                  type: {
                    text: "'success' | 'error'",
                  },
                },
              ],
            },
          ],
          events: [
            {
              description: "Emitted when the data has been copied.",
              name: "sl-copy",
              reactName: "onSlCopy",
              eventName: "SlCopyEvent",
            },
            {
              description: "Emitted when the data could not be copied.",
              name: "sl-error",
              reactName: "onSlError",
              eventName: "SlErrorEvent",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description: "The text value to copy.",
              fieldName: "value",
            },
            {
              name: "from",
              type: {
                text: "string",
              },
              default: "''",
              description:
                'An id that references an element in the same document from which data will be copied. If both this and `value` are\npresent, this value will take precedence. By default, the target element\'s `textContent` will be copied. To copy an\nattribute, append the attribute name wrapped in square brackets, e.g. `from="el[value]"`. To copy a property,\nappend a dot and the property name, e.g. `from="el.value"`.',
              fieldName: "from",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the copy button.",
              fieldName: "disabled",
            },
            {
              name: "copy-label",
              type: {
                text: "string",
              },
              default: "''",
              description: "A custom label to show in the tooltip.",
              fieldName: "copyLabel",
            },
            {
              name: "success-label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A custom label to show in the tooltip after copying.",
              fieldName: "successLabel",
            },
            {
              name: "error-label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A custom label to show in the tooltip when a copy error occurs.",
              fieldName: "errorLabel",
            },
            {
              name: "feedback-duration",
              type: {
                text: "number",
              },
              default: "1000",
              description:
                "The length of time to show feedback before restoring the default trigger.",
              fieldName: "feedbackDuration",
            },
            {
              name: "tooltip-placement",
              type: {
                text: "'top' | 'right' | 'bottom' | 'left'",
              },
              default: "'top'",
              description: "The preferred placement of the tooltip.",
              fieldName: "tooltipPlacement",
            },
            {
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",
              fieldName: "hoist",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Copies text data to the clipboard when the user clicks the trigger.",
          tagNameWithoutPrefix: "copy-button",
          tagName: "sl-copy-button",
          customElement: true,
          jsDoc:
            "/**\n * @summary Copies text data to the clipboard when the user clicks the trigger.\n * @documentation https://shoelace.style/components/copy\n * @status experimental\n * @since 2.7\n *\n * @dependency sl-icon\n * @dependency sl-tooltip\n *\n * @event sl-copy - Emitted when the data has been copied.\n * @event sl-error - Emitted when the data could not be copied.\n *\n * @slot copy-icon - The icon to show in the default copy state. Works best with `<sl-icon>`.\n * @slot success-icon - The icon to show when the content is copied. Works best with `<sl-icon>`.\n * @slot error-icon - The icon to show when a copy error occurs. Works best with `<sl-icon>`.\n *\n * @csspart button - The internal `<button>` element.\n * @csspart copy-icon - The container that holds the copy icon.\n * @csspart success-icon - The container that holds the success icon.\n * @csspart error-icon - The container that holds the error icon.\n * @csspart tooltip__base - The tooltip's exported `base` part.\n * @csspart tooltip__base__popup - The tooltip's exported `popup` part.\n * @csspart tooltip__base__arrow - The tooltip's exported `arrow` part.\n * @csspart tooltip__body - The tooltip's exported `body` part.\n *\n * @cssproperty --success-color - The color to use for success feedback.\n * @cssproperty --error-color - The color to use for error feedback.\n *\n * @animation copy.in - The animation to use when feedback icons animate in.\n * @animation copy.out - The animation to use when feedback icons animate out.\n */",
          documentation: "https://shoelace.style/components/copy",
          status: "experimental",
          since: "2.7",
          dependencies: ["sl-icon", "sl-tooltip"],
          animations: [
            {
              name: "copy.in",
              description:
                "The animation to use when feedback icons animate in.",
            },
            {
              name: "copy.out",
              description:
                "The animation to use when feedback icons animate out.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlCopyButton",
            module: "components/copy-button/copy-button.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/details/details.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlDetails",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The header that wraps both the summary and the expand/collapse icon.",
              name: "header",
            },
            {
              description: "The container that wraps the summary.",
              name: "summary",
            },
            {
              description:
                "The container that wraps the expand/collapse icons.",
              name: "summary-icon",
            },
            {
              description: "The details content.",
              name: "content",
            },
          ],
          slots: [
            {
              description: "The details' main content.",
              name: "",
            },
            {
              description:
                "The details' summary. Alternatively, you can use the `summary` attribute.",
              name: "summary",
            },
            {
              description:
                "Optional expand icon to use instead of the default. Works best with `<sl-icon>`.",
              name: "expand-icon",
            },
            {
              description:
                "Optional collapse icon to use instead of the default. Works best with `<sl-icon>`.",
              name: "collapse-icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "details",
              type: {
                text: "HTMLDetailsElement",
              },
            },
            {
              kind: "field",
              name: "header",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "body",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "expandIconSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "detailsObserver",
              type: {
                text: "MutationObserver",
              },
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the details' open state.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "summary",
              type: {
                text: "string",
              },
              description:
                "The summary to show in the header. If you need to display HTML, use the `summary` slot instead.",
              attribute: "summary",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the details so it can't be toggled.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleSummaryClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleSummaryKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the details.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the details",
            },
          ],
          events: [
            {
              description: "Emitted when the details opens.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
            },
            {
              description:
                "Emitted after the details opens and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
            },
            {
              description: "Emitted when the details closes.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
            },
            {
              description:
                "Emitted after the details closes and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
            },
          ],
          attributes: [
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the details' open state.",
              fieldName: "open",
            },
            {
              name: "summary",
              type: {
                text: "string",
              },
              description:
                "The summary to show in the header. If you need to display HTML, use the `summary` slot instead.",
              fieldName: "summary",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the details so it can't be toggled.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Details show a brief summary and expand to show additional content.",
          tagNameWithoutPrefix: "details",
          tagName: "sl-details",
          customElement: true,
          jsDoc:
            "/**\n * @summary Details show a brief summary and expand to show additional content.\n * @documentation https://shoelace.style/components/details\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @slot - The details' main content.\n * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.\n * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<sl-icon>`.\n * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<sl-icon>`.\n *\n * @event sl-show - Emitted when the details opens.\n * @event sl-after-show - Emitted after the details opens and all animations are complete.\n * @event sl-hide - Emitted when the details closes.\n * @event sl-after-hide - Emitted after the details closes and all animations are complete.\n *\n * @csspart base - The component's base wrapper.\n * @csspart header - The header that wraps both the summary and the expand/collapse icon.\n * @csspart summary - The container that wraps the summary.\n * @csspart summary-icon - The container that wraps the expand/collapse icons.\n * @csspart content - The details content.\n *\n * @animation details.show - The animation to use when showing details. You can use `height: auto` with this animation.\n * @animation details.hide - The animation to use when hiding details. You can use `height: auto` with this animation.\n */",
          documentation: "https://shoelace.style/components/details",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
          animations: [
            {
              name: "details.show",
              description:
                "The animation to use when showing details. You can use `height: auto` with this animation.",
            },
            {
              name: "details.hide",
              description:
                "The animation to use when hiding details. You can use `height: auto` with this animation.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlDetails",
            module: "components/details/details.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/dialog/dialog.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlDialog",
          cssProperties: [
            {
              description:
                "The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.",
              name: "--width",
            },
            {
              description: "The amount of padding to use for the header.",
              name: "--header-spacing",
            },
            {
              description: "The amount of padding to use for the body.",
              name: "--body-spacing",
            },
            {
              description: "The amount of padding to use for the footer.",
              name: "--footer-spacing",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The overlay that covers the screen behind the dialog.",
              name: "overlay",
            },
            {
              description:
                "The dialog's panel (where the dialog and its content are rendered).",
              name: "panel",
            },
            {
              description:
                "The dialog's header. This element wraps the title and header actions.",
              name: "header",
            },
            {
              description:
                "Optional actions to add to the header. Works best with `<sl-icon-button>`.",
              name: "header-actions",
            },
            {
              description: "The dialog's title.",
              name: "title",
            },
            {
              description: "The close button, an `<sl-icon-button>`.",
              name: "close-button",
            },
            {
              description: "The close button's exported `base` part.",
              name: "close-button__base",
            },
            {
              description: "The dialog's body.",
              name: "body",
            },
            {
              description: "The dialog's footer.",
              name: "footer",
            },
          ],
          slots: [
            {
              description: "The dialog's main content.",
              name: "",
            },
            {
              description:
                "The dialog's label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Optional actions to add to the header. Works best with `<sl-icon-button>`.",
              name: "header-actions",
            },
            {
              description:
                "The dialog's footer, usually one or more buttons representing various options.",
              name: "footer",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon-button': SlIconButton }",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'footer')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "originalTrigger",
              type: {
                text: "HTMLElement | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "modal",
              privacy: "public",
              default: "new Modal(this)",
              description:
                "Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.",
            },
            {
              kind: "field",
              name: "closeWatcher",
              type: {
                text: "CloseWatcher | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "dialog",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "panel",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "overlay",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The dialog's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",
              attribute: "label",
              reflects: true,
            },
            {
              kind: "field",
              name: "noHeader",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables the header. This will also remove the default close button, so please ensure you provide an easy,\naccessible way for users to dismiss the dialog.",
              attribute: "no-header",
              reflects: true,
            },
            {
              kind: "method",
              name: "requestClose",
              privacy: "private",
              parameters: [
                {
                  name: "source",
                  type: {
                    text: "'close-button' | 'keyboard' | 'overlay'",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "addOpenListeners",
              privacy: "private",
            },
            {
              kind: "method",
              name: "removeOpenListeners",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentKeyDown",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the dialog.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the dialog",
            },
          ],
          events: [
            {
              description: "Emitted when the dialog opens.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
            },
            {
              description:
                "Emitted after the dialog opens and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
            },
            {
              description: "Emitted when the dialog closes.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
            },
            {
              description:
                "Emitted after the dialog closes and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
            },
            {
              description:
                "Emitted when the dialog opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.",
              name: "sl-initial-focus",
              reactName: "onSlInitialFocus",
              eventName: "SlInitialFocusEvent",
            },
            {
              type: {
                text: "{ source: 'close-button' | 'keyboard' | 'overlay' }",
              },
              description:
                "Emitted when the user attempts to close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in destructive behavior such as data loss.",
              name: "sl-request-close",
              reactName: "onSlRequestClose",
              eventName: "SlRequestCloseEvent",
            },
          ],
          attributes: [
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.",
              fieldName: "open",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The dialog's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",
              fieldName: "label",
            },
            {
              name: "no-header",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables the header. This will also remove the default close button, so please ensure you provide an easy,\naccessible way for users to dismiss the dialog.",
              fieldName: "noHeader",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            'Dialogs, sometimes called "modals", appear above the page and require the user\'s immediate attention.',
          tagNameWithoutPrefix: "dialog",
          tagName: "sl-dialog",
          customElement: true,
          jsDoc:
            "/**\n * @summary Dialogs, sometimes called \"modals\", appear above the page and require the user's immediate attention.\n * @documentation https://shoelace.style/components/dialog\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon-button\n *\n * @slot - The dialog's main content.\n * @slot label - The dialog's label. Alternatively, you can use the `label` attribute.\n * @slot header-actions - Optional actions to add to the header. Works best with `<sl-icon-button>`.\n * @slot footer - The dialog's footer, usually one or more buttons representing various options.\n *\n * @event sl-show - Emitted when the dialog opens.\n * @event sl-after-show - Emitted after the dialog opens and all animations are complete.\n * @event sl-hide - Emitted when the dialog closes.\n * @event sl-after-hide - Emitted after the dialog closes and all animations are complete.\n * @event sl-initial-focus - Emitted when the dialog opens and is ready to receive focus. Calling\n *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.\n * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} sl-request-close - Emitted when the user attempts to\n *   close the dialog by clicking the close button, clicking the overlay, or pressing escape. Calling\n *   `event.preventDefault()` will keep the dialog open. Avoid using this unless closing the dialog will result in\n *   destructive behavior such as data loss.\n *\n * @csspart base - The component's base wrapper.\n * @csspart overlay - The overlay that covers the screen behind the dialog.\n * @csspart panel - The dialog's panel (where the dialog and its content are rendered).\n * @csspart header - The dialog's header. This element wraps the title and header actions.\n * @csspart header-actions - Optional actions to add to the header. Works best with `<sl-icon-button>`.\n * @csspart title - The dialog's title.\n * @csspart close-button - The close button, an `<sl-icon-button>`.\n * @csspart close-button__base - The close button's exported `base` part.\n * @csspart body - The dialog's body.\n * @csspart footer - The dialog's footer.\n *\n * @cssproperty --width - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.\n * @cssproperty --header-spacing - The amount of padding to use for the header.\n * @cssproperty --body-spacing - The amount of padding to use for the body.\n * @cssproperty --footer-spacing - The amount of padding to use for the footer.\n *\n * @animation dialog.show - The animation to use when showing the dialog.\n * @animation dialog.hide - The animation to use when hiding the dialog.\n * @animation dialog.denyClose - The animation to use when a request to close the dialog is denied.\n * @animation dialog.overlay.show - The animation to use when showing the dialog's overlay.\n * @animation dialog.overlay.hide - The animation to use when hiding the dialog's overlay.\n *\n * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus\n *   trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when\n *   the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.\n */",
          documentation: "https://shoelace.style/components/dialog",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon-button"],
          animations: [
            {
              name: "dialog.show",
              description: "The animation to use when showing the dialog.",
            },
            {
              name: "dialog.hide",
              description: "The animation to use when hiding the dialog.",
            },
            {
              name: "dialog.denyClose",
              description:
                "The animation to use when a request to close the dialog is denied.",
            },
            {
              name: "dialog.overlay.show",
              description:
                "The animation to use when showing the dialog's overlay.",
            },
            {
              name: "dialog.overlay.hide",
              description:
                "The animation to use when hiding the dialog's overlay.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlDialog",
            module: "components/dialog/dialog.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/divider/divider.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlDivider",
          cssProperties: [
            {
              description: "The color of the divider.",
              name: "--color",
            },
            {
              description: "The width of the divider.",
              name: "--width",
            },
            {
              description: "The spacing of the divider.",
              name: "--spacing",
            },
          ],
          members: [
            {
              kind: "field",
              name: "vertical",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the divider in a vertical orientation.",
              attribute: "vertical",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleVerticalChange",
            },
          ],
          attributes: [
            {
              name: "vertical",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the divider in a vertical orientation.",
              fieldName: "vertical",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Dividers are used to visually separate or group elements.",
          tagNameWithoutPrefix: "divider",
          tagName: "sl-divider",
          customElement: true,
          jsDoc:
            "/**\n * @summary Dividers are used to visually separate or group elements.\n * @documentation https://shoelace.style/components/divider\n * @status stable\n * @since 2.0\n *\n * @cssproperty --color - The color of the divider.\n * @cssproperty --width - The width of the divider.\n * @cssproperty --spacing - The spacing of the divider.\n */",
          documentation: "https://shoelace.style/components/divider",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlDivider",
            module: "components/divider/divider.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/drawer/drawer.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlDrawer",
          cssProperties: [
            {
              description:
                "The preferred size of the drawer. This will be applied to the drawer's width or height depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.",
              name: "--size",
            },
            {
              description: "The amount of padding to use for the header.",
              name: "--header-spacing",
            },
            {
              description: "The amount of padding to use for the body.",
              name: "--body-spacing",
            },
            {
              description: "The amount of padding to use for the footer.",
              name: "--footer-spacing",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The overlay that covers the screen behind the drawer.",
              name: "overlay",
            },
            {
              description:
                "The drawer's panel (where the drawer and its content are rendered).",
              name: "panel",
            },
            {
              description:
                "The drawer's header. This element wraps the title and header actions.",
              name: "header",
            },
            {
              description:
                "Optional actions to add to the header. Works best with `<sl-icon-button>`.",
              name: "header-actions",
            },
            {
              description: "The drawer's title.",
              name: "title",
            },
            {
              description: "The close button, an `<sl-icon-button>`.",
              name: "close-button",
            },
            {
              description: "The close button's exported `base` part.",
              name: "close-button__base",
            },
            {
              description: "The drawer's body.",
              name: "body",
            },
            {
              description: "The drawer's footer.",
              name: "footer",
            },
          ],
          slots: [
            {
              description: "The drawer's main content.",
              name: "",
            },
            {
              description:
                "The drawer's label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Optional actions to add to the header. Works best with `<sl-icon-button>`.",
              name: "header-actions",
            },
            {
              description:
                "The drawer's footer, usually one or more buttons representing various options.",
              name: "footer",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon-button': SlIconButton }",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'footer')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "originalTrigger",
              type: {
                text: "HTMLElement | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "modal",
              privacy: "public",
              default: "new Modal(this)",
              description:
                "Exposes the internal modal utility that controls focus trapping. To temporarily disable focus trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.",
            },
            {
              kind: "field",
              name: "closeWatcher",
              type: {
                text: "CloseWatcher | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "drawer",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "panel",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "overlay",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The drawer's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",
              attribute: "label",
              reflects: true,
            },
            {
              kind: "field",
              name: "placement",
              type: {
                text: "'top' | 'end' | 'bottom' | 'start'",
              },
              default: "'end'",
              description: "The direction from which the drawer will open.",
              attribute: "placement",
              reflects: true,
            },
            {
              kind: "field",
              name: "contained",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of\nits parent element, set this attribute and add `position: relative` to the parent.",
              attribute: "contained",
              reflects: true,
            },
            {
              kind: "field",
              name: "noHeader",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Removes the header. This will also remove the default close button, so please ensure you provide an easy,\naccessible way for users to dismiss the drawer.",
              attribute: "no-header",
              reflects: true,
            },
            {
              kind: "method",
              name: "requestClose",
              privacy: "private",
              parameters: [
                {
                  name: "source",
                  type: {
                    text: "'close-button' | 'keyboard' | 'overlay'",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "addOpenListeners",
              privacy: "private",
            },
            {
              kind: "method",
              name: "removeOpenListeners",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentKeyDown",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
            {
              kind: "method",
              name: "handleNoModalChange",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the drawer.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the drawer",
            },
          ],
          events: [
            {
              description: "Emitted when the drawer opens.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
            },
            {
              description:
                "Emitted after the drawer opens and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
            },
            {
              description: "Emitted when the drawer closes.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
            },
            {
              description:
                "Emitted after the drawer closes and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
            },
            {
              description:
                "Emitted when the drawer opens and is ready to receive focus. Calling `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.",
              name: "sl-initial-focus",
              reactName: "onSlInitialFocus",
              eventName: "SlInitialFocusEvent",
            },
            {
              type: {
                text: "{ source: 'close-button' | 'keyboard' | 'overlay' }",
              },
              description:
                "Emitted when the user attempts to close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in destructive behavior such as data loss.",
              name: "sl-request-close",
              reactName: "onSlRequestClose",
              eventName: "SlRequestCloseEvent",
            },
          ],
          attributes: [
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the drawer is open. You can toggle this attribute to show and hide the drawer, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the drawer's open state.",
              fieldName: "open",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The drawer's label as displayed in the header. You should always include a relevant label even when using\n`no-header`, as it is required for proper accessibility. If you need to display HTML, use the `label` slot instead.",
              fieldName: "label",
            },
            {
              name: "placement",
              type: {
                text: "'top' | 'end' | 'bottom' | 'start'",
              },
              default: "'end'",
              description: "The direction from which the drawer will open.",
              fieldName: "placement",
            },
            {
              name: "contained",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "By default, the drawer slides out of its containing block (usually the viewport). To make the drawer slide out of\nits parent element, set this attribute and add `position: relative` to the parent.",
              fieldName: "contained",
            },
            {
              name: "no-header",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Removes the header. This will also remove the default close button, so please ensure you provide an easy,\naccessible way for users to dismiss the drawer.",
              fieldName: "noHeader",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Drawers slide in from a container to expose additional options and information.",
          tagNameWithoutPrefix: "drawer",
          tagName: "sl-drawer",
          customElement: true,
          jsDoc:
            "/**\n * @summary Drawers slide in from a container to expose additional options and information.\n * @documentation https://shoelace.style/components/drawer\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon-button\n *\n * @slot - The drawer's main content.\n * @slot label - The drawer's label. Alternatively, you can use the `label` attribute.\n * @slot header-actions - Optional actions to add to the header. Works best with `<sl-icon-button>`.\n * @slot footer - The drawer's footer, usually one or more buttons representing various options.\n *\n * @event sl-show - Emitted when the drawer opens.\n * @event sl-after-show - Emitted after the drawer opens and all animations are complete.\n * @event sl-hide - Emitted when the drawer closes.\n * @event sl-after-hide - Emitted after the drawer closes and all animations are complete.\n * @event sl-initial-focus - Emitted when the drawer opens and is ready to receive focus. Calling\n *   `event.preventDefault()` will prevent focusing and allow you to set it on a different element, such as an input.\n * @event {{ source: 'close-button' | 'keyboard' | 'overlay' }} sl-request-close - Emitted when the user attempts to\n *   close the drawer by clicking the close button, clicking the overlay, or pressing escape. Calling\n *   `event.preventDefault()` will keep the drawer open. Avoid using this unless closing the drawer will result in\n *   destructive behavior such as data loss.\n *\n * @csspart base - The component's base wrapper.\n * @csspart overlay - The overlay that covers the screen behind the drawer.\n * @csspart panel - The drawer's panel (where the drawer and its content are rendered).\n * @csspart header - The drawer's header. This element wraps the title and header actions.\n * @csspart header-actions - Optional actions to add to the header. Works best with `<sl-icon-button>`.\n * @csspart title - The drawer's title.\n * @csspart close-button - The close button, an `<sl-icon-button>`.\n * @csspart close-button__base - The close button's exported `base` part.\n * @csspart body - The drawer's body.\n * @csspart footer - The drawer's footer.\n *\n * @cssproperty --size - The preferred size of the drawer. This will be applied to the drawer's width or height\n *   depending on its `placement`. Note that the drawer will shrink to accommodate smaller screens.\n * @cssproperty --header-spacing - The amount of padding to use for the header.\n * @cssproperty --body-spacing - The amount of padding to use for the body.\n * @cssproperty --footer-spacing - The amount of padding to use for the footer.\n *\n * @animation drawer.showTop - The animation to use when showing a drawer with `top` placement.\n * @animation drawer.showEnd - The animation to use when showing a drawer with `end` placement.\n * @animation drawer.showBottom - The animation to use when showing a drawer with `bottom` placement.\n * @animation drawer.showStart - The animation to use when showing a drawer with `start` placement.\n * @animation drawer.hideTop - The animation to use when hiding a drawer with `top` placement.\n * @animation drawer.hideEnd - The animation to use when hiding a drawer with `end` placement.\n * @animation drawer.hideBottom - The animation to use when hiding a drawer with `bottom` placement.\n * @animation drawer.hideStart - The animation to use when hiding a drawer with `start` placement.\n * @animation drawer.denyClose - The animation to use when a request to close the drawer is denied.\n * @animation drawer.overlay.show - The animation to use when showing the drawer's overlay.\n * @animation drawer.overlay.hide - The animation to use when hiding the drawer's overlay.\n *\n * @property modal - Exposes the internal modal utility that controls focus trapping. To temporarily disable focus\n *   trapping and allow third-party modals spawned from an active Shoelace modal, call `modal.activateExternal()` when\n *   the third-party modal opens. Upon closing, call `modal.deactivateExternal()` to restore Shoelace's focus trapping.\n */",
          documentation: "https://shoelace.style/components/drawer",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon-button"],
          animations: [
            {
              name: "drawer.showTop",
              description:
                "The animation to use when showing a drawer with `top` placement.",
            },
            {
              name: "drawer.showEnd",
              description:
                "The animation to use when showing a drawer with `end` placement.",
            },
            {
              name: "drawer.showBottom",
              description:
                "The animation to use when showing a drawer with `bottom` placement.",
            },
            {
              name: "drawer.showStart",
              description:
                "The animation to use when showing a drawer with `start` placement.",
            },
            {
              name: "drawer.hideTop",
              description:
                "The animation to use when hiding a drawer with `top` placement.",
            },
            {
              name: "drawer.hideEnd",
              description:
                "The animation to use when hiding a drawer with `end` placement.",
            },
            {
              name: "drawer.hideBottom",
              description:
                "The animation to use when hiding a drawer with `bottom` placement.",
            },
            {
              name: "drawer.hideStart",
              description:
                "The animation to use when hiding a drawer with `start` placement.",
            },
            {
              name: "drawer.denyClose",
              description:
                "The animation to use when a request to close the drawer is denied.",
            },
            {
              name: "drawer.overlay.show",
              description:
                "The animation to use when showing the drawer's overlay.",
            },
            {
              name: "drawer.overlay.hide",
              description:
                "The animation to use when hiding the drawer's overlay.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlDrawer",
            module: "components/drawer/drawer.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/dropdown/dropdown.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlDropdown",
          cssParts: [
            {
              description:
                "The component's base wrapper, an `<sl-popup>` element.",
              name: "base",
            },
            {
              description:
                "The popup's exported `popup` part. Use this to target the tooltip's popup container.",
              name: "base__popup",
            },
            {
              description: "The container that wraps the trigger.",
              name: "trigger",
            },
            {
              description:
                "The panel that gets shown when the dropdown is open.",
              name: "panel",
            },
          ],
          slots: [
            {
              description: "The dropdown's main content.",
              name: "",
            },
            {
              description:
                "The dropdown's trigger, usually a `<sl-button>` element.",
              name: "trigger",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-popup': SlPopup }",
            },
            {
              kind: "field",
              name: "popup",
              type: {
                text: "SlPopup",
              },
            },
            {
              kind: "field",
              name: "trigger",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "panel",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "closeWatcher",
              type: {
                text: "CloseWatcher | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "placement",
              type: {
                text: "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
              },
              default: "'bottom-start'",
              description:
                "The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel\ninside of the viewport.",
              attribute: "placement",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the dropdown so the panel will not open.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "stayOpenOnSelect",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for\ndropdowns that allow for multiple interactions.",
              attribute: "stay-open-on-select",
              reflects: true,
            },
            {
              kind: "field",
              name: "containingElement",
              type: {
                text: "HTMLElement | undefined",
              },
              description:
                "The dropdown will close when the user interacts outside of this element (e.g. clicking). Useful for composing other\ncomponents that use a dropdown internally.",
            },
            {
              kind: "field",
              name: "distance",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel away from its trigger.",
              attribute: "distance",
            },
            {
              kind: "field",
              name: "skidding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel along its trigger.",
              attribute: "skidding",
            },
            {
              kind: "field",
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",
              attribute: "hoist",
            },
            {
              kind: "field",
              name: "sync",
              type: {
                text: "'width' | 'height' | 'both' | undefined",
              },
              default: "undefined",
              description:
                "Syncs the popup width or height to that of the trigger element.",
              attribute: "sync",
              reflects: true,
            },
            {
              kind: "method",
              name: "focusOnTrigger",
            },
            {
              kind: "method",
              name: "getMenu",
            },
            {
              kind: "field",
              name: "handleKeyDown",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentKeyDown",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentMouseDown",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handlePanelSelect",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleTriggerClick",
            },
            {
              kind: "method",
              name: "handleTriggerKeyDown",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleTriggerKeyUp",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleTriggerSlotChange",
            },
            {
              kind: "method",
              name: "updateAccessibleTrigger",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the dropdown panel.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the dropdown panel",
            },
            {
              kind: "method",
              name: "reposition",
              description:
                "Instructs the dropdown menu to reposition. Useful when the position or size of the trigger changes when the menu\nis activated.",
            },
            {
              kind: "method",
              name: "addOpenListeners",
            },
            {
              kind: "method",
              name: "removeOpenListeners",
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
          ],
          events: [
            {
              description: "Emitted when the dropdown opens.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
            },
            {
              description:
                "Emitted after the dropdown opens and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
            },
            {
              description: "Emitted when the dropdown closes.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
            },
            {
              description:
                "Emitted after the dropdown closes and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
            },
          ],
          attributes: [
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the dropdown is open. You can toggle this attribute to show and hide the dropdown, or you\ncan use the `show()` and `hide()` methods and this attribute will reflect the dropdown's open state.",
              fieldName: "open",
            },
            {
              name: "placement",
              type: {
                text: "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
              },
              default: "'bottom-start'",
              description:
                "The preferred placement of the dropdown panel. Note that the actual placement may vary as needed to keep the panel\ninside of the viewport.",
              fieldName: "placement",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the dropdown so the panel will not open.",
              fieldName: "disabled",
            },
            {
              name: "stay-open-on-select",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "By default, the dropdown is closed when an item is selected. This attribute will keep it open instead. Useful for\ndropdowns that allow for multiple interactions.",
              fieldName: "stayOpenOnSelect",
            },
            {
              name: "distance",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel away from its trigger.",
              fieldName: "distance",
            },
            {
              name: "skidding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel along its trigger.",
              fieldName: "skidding",
            },
            {
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the panel from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",
              fieldName: "hoist",
            },
            {
              name: "sync",
              type: {
                text: "'width' | 'height' | 'both' | undefined",
              },
              default: "undefined",
              description:
                "Syncs the popup width or height to that of the trigger element.",
              fieldName: "sync",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            'Dropdowns expose additional content that "drops down" in a panel.',
          tagNameWithoutPrefix: "dropdown",
          tagName: "sl-dropdown",
          customElement: true,
          jsDoc:
            "/**\n * @summary Dropdowns expose additional content that \"drops down\" in a panel.\n * @documentation https://shoelace.style/components/dropdown\n * @status stable\n * @since 2.0\n *\n * @dependency sl-popup\n *\n * @slot - The dropdown's main content.\n * @slot trigger - The dropdown's trigger, usually a `<sl-button>` element.\n *\n * @event sl-show - Emitted when the dropdown opens.\n * @event sl-after-show - Emitted after the dropdown opens and all animations are complete.\n * @event sl-hide - Emitted when the dropdown closes.\n * @event sl-after-hide - Emitted after the dropdown closes and all animations are complete.\n *\n * @csspart base - The component's base wrapper, an `<sl-popup>` element.\n * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.\n * @csspart trigger - The container that wraps the trigger.\n * @csspart panel - The panel that gets shown when the dropdown is open.\n *\n * @animation dropdown.show - The animation to use when showing the dropdown.\n * @animation dropdown.hide - The animation to use when hiding the dropdown.\n */",
          documentation: "https://shoelace.style/components/dropdown",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-popup"],
          animations: [
            {
              name: "dropdown.show",
              description: "The animation to use when showing the dropdown.",
            },
            {
              name: "dropdown.hide",
              description: "The animation to use when hiding the dropdown.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlDropdown",
            module: "components/dropdown/dropdown.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/format-bytes/format-bytes.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlFormatBytes",
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The number to format in bytes.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "unit",
              type: {
                text: "'byte' | 'bit'",
              },
              default: "'byte'",
              description: "The type of unit to display.",
              attribute: "unit",
            },
            {
              kind: "field",
              name: "display",
              type: {
                text: "'long' | 'short' | 'narrow'",
              },
              default: "'short'",
              description:
                'Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".',
              attribute: "display",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The number to format in bytes.",
              fieldName: "value",
            },
            {
              name: "unit",
              type: {
                text: "'byte' | 'bit'",
              },
              default: "'byte'",
              description: "The type of unit to display.",
              fieldName: "unit",
            },
            {
              name: "display",
              type: {
                text: "'long' | 'short' | 'narrow'",
              },
              default: "'short'",
              description:
                'Determines how to display the result, e.g. "100 bytes", "100 b", or "100b".',
              fieldName: "display",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Formats a number as a human readable bytes value.",
          tagNameWithoutPrefix: "format-bytes",
          tagName: "sl-format-bytes",
          customElement: true,
          jsDoc:
            "/**\n * @summary Formats a number as a human readable bytes value.\n * @documentation https://shoelace.style/components/format-bytes\n * @status stable\n * @since 2.0\n */",
          documentation: "https://shoelace.style/components/format-bytes",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlFormatBytes",
            module: "components/format-bytes/format-bytes.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/format-date/format-date.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlFormatDate",
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "date",
              type: {
                text: "Date | string",
              },
              default: "new Date()",
              description:
                "The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly\nrecommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format\nin JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).",
              attribute: "date",
            },
            {
              kind: "field",
              name: "weekday",
              type: {
                text: "'narrow' | 'short' | 'long'",
              },
              description: "The format for displaying the weekday.",
              attribute: "weekday",
            },
            {
              kind: "field",
              name: "era",
              type: {
                text: "'narrow' | 'short' | 'long'",
              },
              description: "The format for displaying the era.",
              attribute: "era",
            },
            {
              kind: "field",
              name: "year",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the year.",
              attribute: "year",
            },
            {
              kind: "field",
              name: "month",
              type: {
                text: "'numeric' | '2-digit' | 'narrow' | 'short' | 'long'",
              },
              description: "The format for displaying the month.",
              attribute: "month",
            },
            {
              kind: "field",
              name: "day",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the day.",
              attribute: "day",
            },
            {
              kind: "field",
              name: "hour",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the hour.",
              attribute: "hour",
            },
            {
              kind: "field",
              name: "minute",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the minute.",
              attribute: "minute",
            },
            {
              kind: "field",
              name: "second",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the second.",
              attribute: "second",
            },
            {
              kind: "field",
              name: "timeZoneName",
              type: {
                text: "'short' | 'long'",
              },
              description: "The format for displaying the time.",
              attribute: "time-zone-name",
            },
            {
              kind: "field",
              name: "timeZone",
              type: {
                text: "string",
              },
              description: "The time zone to express the time in.",
              attribute: "time-zone",
            },
            {
              kind: "field",
              name: "hourFormat",
              type: {
                text: "'auto' | '12' | '24'",
              },
              default: "'auto'",
              description: "The format for displaying the hour.",
              attribute: "hour-format",
            },
          ],
          attributes: [
            {
              name: "date",
              type: {
                text: "Date | string",
              },
              default: "new Date()",
              description:
                "The date/time to format. If not set, the current date and time will be used. When passing a string, it's strongly\nrecommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert a date to this format\nin JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).",
              fieldName: "date",
            },
            {
              name: "weekday",
              type: {
                text: "'narrow' | 'short' | 'long'",
              },
              description: "The format for displaying the weekday.",
              fieldName: "weekday",
            },
            {
              name: "era",
              type: {
                text: "'narrow' | 'short' | 'long'",
              },
              description: "The format for displaying the era.",
              fieldName: "era",
            },
            {
              name: "year",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the year.",
              fieldName: "year",
            },
            {
              name: "month",
              type: {
                text: "'numeric' | '2-digit' | 'narrow' | 'short' | 'long'",
              },
              description: "The format for displaying the month.",
              fieldName: "month",
            },
            {
              name: "day",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the day.",
              fieldName: "day",
            },
            {
              name: "hour",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the hour.",
              fieldName: "hour",
            },
            {
              name: "minute",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the minute.",
              fieldName: "minute",
            },
            {
              name: "second",
              type: {
                text: "'numeric' | '2-digit'",
              },
              description: "The format for displaying the second.",
              fieldName: "second",
            },
            {
              name: "time-zone-name",
              type: {
                text: "'short' | 'long'",
              },
              description: "The format for displaying the time.",
              fieldName: "timeZoneName",
            },
            {
              name: "time-zone",
              type: {
                text: "string",
              },
              description: "The time zone to express the time in.",
              fieldName: "timeZone",
            },
            {
              name: "hour-format",
              type: {
                text: "'auto' | '12' | '24'",
              },
              default: "'auto'",
              description: "The format for displaying the hour.",
              fieldName: "hourFormat",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Formats a date/time using the specified locale and options.",
          tagNameWithoutPrefix: "format-date",
          tagName: "sl-format-date",
          customElement: true,
          jsDoc:
            "/**\n * @summary Formats a date/time using the specified locale and options.\n * @documentation https://shoelace.style/components/format-date\n * @status stable\n * @since 2.0\n */",
          documentation: "https://shoelace.style/components/format-date",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlFormatDate",
            module: "components/format-date/format-date.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/format-number/format-number.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlFormatNumber",
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The number to format.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "type",
              type: {
                text: "'currency' | 'decimal' | 'percent'",
              },
              default: "'decimal'",
              description: "The formatting style to use.",
              attribute: "type",
            },
            {
              kind: "field",
              name: "noGrouping",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Turns off grouping separators.",
              attribute: "no-grouping",
            },
            {
              kind: "field",
              name: "currency",
              type: {
                text: "string",
              },
              default: "'USD'",
              description:
                "The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.",
              attribute: "currency",
            },
            {
              kind: "field",
              name: "currencyDisplay",
              type: {
                text: "'symbol' | 'narrowSymbol' | 'code' | 'name'",
              },
              default: "'symbol'",
              description: "How to display the currency.",
              attribute: "currency-display",
            },
            {
              kind: "field",
              name: "minimumIntegerDigits",
              type: {
                text: "number",
              },
              description:
                "The minimum number of integer digits to use. Possible values are 1-21.",
              attribute: "minimum-integer-digits",
            },
            {
              kind: "field",
              name: "minimumFractionDigits",
              type: {
                text: "number",
              },
              description:
                "The minimum number of fraction digits to use. Possible values are 0-20.",
              attribute: "minimum-fraction-digits",
            },
            {
              kind: "field",
              name: "maximumFractionDigits",
              type: {
                text: "number",
              },
              description:
                "The maximum number of fraction digits to use. Possible values are 0-0.",
              attribute: "maximum-fraction-digits",
            },
            {
              kind: "field",
              name: "minimumSignificantDigits",
              type: {
                text: "number",
              },
              description:
                "The minimum number of significant digits to use. Possible values are 1-21.",
              attribute: "minimum-significant-digits",
            },
            {
              kind: "field",
              name: "maximumSignificantDigits",
              type: {
                text: "number",
              },
              description:
                "The maximum number of significant digits to use,. Possible values are 1-21.",
              attribute: "maximum-significant-digits",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The number to format.",
              fieldName: "value",
            },
            {
              name: "type",
              type: {
                text: "'currency' | 'decimal' | 'percent'",
              },
              default: "'decimal'",
              description: "The formatting style to use.",
              fieldName: "type",
            },
            {
              name: "no-grouping",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Turns off grouping separators.",
              fieldName: "noGrouping",
            },
            {
              name: "currency",
              type: {
                text: "string",
              },
              default: "'USD'",
              description:
                "The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code to use when formatting.",
              fieldName: "currency",
            },
            {
              name: "currency-display",
              type: {
                text: "'symbol' | 'narrowSymbol' | 'code' | 'name'",
              },
              default: "'symbol'",
              description: "How to display the currency.",
              fieldName: "currencyDisplay",
            },
            {
              name: "minimum-integer-digits",
              type: {
                text: "number",
              },
              description:
                "The minimum number of integer digits to use. Possible values are 1-21.",
              fieldName: "minimumIntegerDigits",
            },
            {
              name: "minimum-fraction-digits",
              type: {
                text: "number",
              },
              description:
                "The minimum number of fraction digits to use. Possible values are 0-20.",
              fieldName: "minimumFractionDigits",
            },
            {
              name: "maximum-fraction-digits",
              type: {
                text: "number",
              },
              description:
                "The maximum number of fraction digits to use. Possible values are 0-0.",
              fieldName: "maximumFractionDigits",
            },
            {
              name: "minimum-significant-digits",
              type: {
                text: "number",
              },
              description:
                "The minimum number of significant digits to use. Possible values are 1-21.",
              fieldName: "minimumSignificantDigits",
            },
            {
              name: "maximum-significant-digits",
              type: {
                text: "number",
              },
              description:
                "The maximum number of significant digits to use,. Possible values are 1-21.",
              fieldName: "maximumSignificantDigits",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Formats a number using the specified locale and options.",
          tagNameWithoutPrefix: "format-number",
          tagName: "sl-format-number",
          customElement: true,
          jsDoc:
            "/**\n * @summary Formats a number using the specified locale and options.\n * @documentation https://shoelace.style/components/format-number\n * @status stable\n * @since 2.0\n */",
          documentation: "https://shoelace.style/components/format-number",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlFormatNumber",
            module: "components/format-number/format-number.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/icon/icon.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlIcon",
          cssParts: [
            {
              description: "The internal SVG element.",
              name: "svg",
            },
            {
              description:
                "The <use> element generated when using `spriteSheet: true`",
              name: "use",
            },
          ],
          members: [
            {
              kind: "field",
              name: "initialRender",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "method",
              name: "resolveIcon",
              privacy: "private",
              return: {
                type: {
                  text: "Promise<SVGResult>",
                },
              },
              parameters: [
                {
                  name: "url",
                  type: {
                    text: "string",
                  },
                },
                {
                  name: "library",
                  optional: true,
                  type: {
                    text: "IconLibrary",
                  },
                },
              ],
              description:
                "Given a URL, this function returns the resulting SVG element or an appropriate error symbol.",
            },
            {
              kind: "field",
              name: "svg",
              type: {
                text: "SVGElement | HTMLTemplateResult | null",
              },
              privacy: "private",
              default: "null",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string | undefined",
              },
              description:
                "The name of the icon to draw. Available names depend on the icon library being used.",
              attribute: "name",
              reflects: true,
            },
            {
              kind: "field",
              name: "src",
              type: {
                text: "string | undefined",
              },
              description:
                "An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and\ncan result in XSS attacks.",
              attribute: "src",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and\nignored by assistive devices.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "library",
              type: {
                text: "string",
              },
              default: "'default'",
              description: "The name of a registered custom icon library.",
              attribute: "library",
              reflects: true,
            },
            {
              kind: "method",
              name: "getIconSource",
              privacy: "private",
              return: {
                type: {
                  text: "IconSource",
                },
              },
            },
            {
              kind: "method",
              name: "handleLabelChange",
            },
            {
              kind: "method",
              name: "setIcon",
            },
          ],
          events: [
            {
              description:
                "Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.",
              name: "sl-load",
              reactName: "onSlLoad",
              eventName: "SlLoadEvent",
            },
            {
              description:
                "Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.",
              name: "sl-error",
              reactName: "onSlError",
              eventName: "SlErrorEvent",
            },
          ],
          attributes: [
            {
              name: "name",
              type: {
                text: "string | undefined",
              },
              description:
                "The name of the icon to draw. Available names depend on the icon library being used.",
              fieldName: "name",
            },
            {
              name: "src",
              type: {
                text: "string | undefined",
              },
              description:
                "An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and\ncan result in XSS attacks.",
              fieldName: "src",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and\nignored by assistive devices.",
              fieldName: "label",
            },
            {
              name: "library",
              type: {
                text: "string",
              },
              default: "'default'",
              description: "The name of a registered custom icon library.",
              fieldName: "library",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Icons are symbols that can be used to represent various options within an application.",
          tagNameWithoutPrefix: "icon",
          tagName: "sl-icon",
          customElement: true,
          jsDoc:
            "/**\n * @summary Icons are symbols that can be used to represent various options within an application.\n * @documentation https://shoelace.style/components/icon\n * @status stable\n * @since 2.0\n *\n * @event sl-load - Emitted when the icon has loaded. When using `spriteSheet: true` this will not emit.\n * @event sl-error - Emitted when the icon fails to load due to an error. When using `spriteSheet: true` this will not emit.\n *\n * @csspart svg - The internal SVG element.\n * @csspart use - The <use> element generated when using `spriteSheet: true`\n */",
          documentation: "https://shoelace.style/components/icon",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlIcon",
            module: "components/icon/icon.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/icon-button/icon-button.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlIconButton",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "button",
              type: {
                text: "HTMLButtonElement | HTMLLinkElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string | undefined",
              },
              description:
                "The name of the icon to draw. Available names depend on the icon library being used.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "library",
              type: {
                text: "string | undefined",
              },
              description: "The name of a registered custom icon library.",
              attribute: "library",
            },
            {
              kind: "field",
              name: "src",
              type: {
                text: "string | undefined",
              },
              description:
                "An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and\ncan result in XSS attacks.",
              attribute: "src",
            },
            {
              kind: "field",
              name: "href",
              type: {
                text: "string | undefined",
              },
              description:
                "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",
              attribute: "href",
            },
            {
              kind: "field",
              name: "target",
              type: {
                text: "'_blank' | '_parent' | '_self' | '_top' | undefined",
              },
              description:
                "Tells the browser where to open the link. Only used when `href` is set.",
              attribute: "target",
            },
            {
              kind: "field",
              name: "download",
              type: {
                text: "string | undefined",
              },
              description:
                "Tells the browser to download the linked file as this filename. Only used when `href` is set.",
              attribute: "download",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A description that gets read by assistive devices. For optimal accessibility, you should always include a label\nthat describes what the icon button does.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the button.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "click",
              description: "Simulates a click on the icon button.",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the icon button.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the icon button.",
            },
          ],
          events: [
            {
              description: "Emitted when the icon button loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the icon button gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
          ],
          attributes: [
            {
              name: "name",
              type: {
                text: "string | undefined",
              },
              description:
                "The name of the icon to draw. Available names depend on the icon library being used.",
              fieldName: "name",
            },
            {
              name: "library",
              type: {
                text: "string | undefined",
              },
              description: "The name of a registered custom icon library.",
              fieldName: "library",
            },
            {
              name: "src",
              type: {
                text: "string | undefined",
              },
              description:
                "An external URL of an SVG file. Be sure you trust the content you are including, as it will be executed as code and\ncan result in XSS attacks.",
              fieldName: "src",
            },
            {
              name: "href",
              type: {
                text: "string | undefined",
              },
              description:
                "When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`.",
              fieldName: "href",
            },
            {
              name: "target",
              type: {
                text: "'_blank' | '_parent' | '_self' | '_top' | undefined",
              },
              description:
                "Tells the browser where to open the link. Only used when `href` is set.",
              fieldName: "target",
            },
            {
              name: "download",
              type: {
                text: "string | undefined",
              },
              description:
                "Tells the browser to download the linked file as this filename. Only used when `href` is set.",
              fieldName: "download",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A description that gets read by assistive devices. For optimal accessibility, you should always include a label\nthat describes what the icon button does.",
              fieldName: "label",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the button.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.",
          tagNameWithoutPrefix: "icon-button",
          tagName: "sl-icon-button",
          customElement: true,
          jsDoc:
            "/**\n * @summary Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.\n * @documentation https://shoelace.style/components/icon-button\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @event sl-blur - Emitted when the icon button loses focus.\n * @event sl-focus - Emitted when the icon button gains focus.\n *\n * @csspart base - The component's base wrapper.\n */",
          documentation: "https://shoelace.style/components/icon-button",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlIconButton",
            module: "components/icon-button/icon-button.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/image-comparer/image-comparer.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlImageComparer",
          cssProperties: [
            {
              description: "The width of the dividing line.",
              name: "--divider-width",
            },
            {
              description: "The size of the compare handle.",
              name: "--handle-size",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The container that wraps the before image.",
              name: "before",
            },
            {
              description: "The container that wraps the after image.",
              name: "after",
            },
            {
              description: "The divider that separates the images.",
              name: "divider",
            },
            {
              description:
                "The handle that the user drags to expose the after image.",
              name: "handle",
            },
          ],
          slots: [
            {
              description: "The before image, an `<img>` or `<svg>` element.",
              name: "before",
            },
            {
              description: "The after image, an `<img>` or `<svg>` element.",
              name: "after",
            },
            {
              description: "The icon used inside the handle.",
              name: "handle",
            },
          ],
          members: [
            {
              kind: "field",
              name: "scopedElement",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "base",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "handle",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "position",
              type: {
                text: "number",
              },
              default: "50",
              description: "The position of the divider as a percentage.",
              attribute: "position",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleDrag",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "PointerEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handlePositionChange",
            },
          ],
          events: [
            {
              description: "Emitted when the position changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
          ],
          attributes: [
            {
              name: "position",
              type: {
                text: "number",
              },
              default: "50",
              description: "The position of the divider as a percentage.",
              fieldName: "position",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Compare visual differences between similar photos with a sliding panel.",
          tagNameWithoutPrefix: "image-comparer",
          tagName: "sl-image-comparer",
          customElement: true,
          jsDoc:
            "/**\n * @summary Compare visual differences between similar photos with a sliding panel.\n * @documentation https://shoelace.style/components/image-comparer\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @slot before - The before image, an `<img>` or `<svg>` element.\n * @slot after - The after image, an `<img>` or `<svg>` element.\n * @slot handle - The icon used inside the handle.\n *\n * @event sl-change - Emitted when the position changes.\n *\n * @csspart base - The component's base wrapper.\n * @csspart before - The container that wraps the before image.\n * @csspart after - The container that wraps the after image.\n * @csspart divider - The divider that separates the images.\n * @csspart handle - The handle that the user drags to expose the after image.\n *\n * @cssproperty --divider-width - The width of the dividing line.\n * @cssproperty --handle-size - The size of the compare handle.\n */",
          documentation: "https://shoelace.style/components/image-comparer",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlImageComparer",
            module: "components/image-comparer/image-comparer.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/include/include.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlInclude",
          members: [
            {
              kind: "field",
              name: "src",
              type: {
                text: "string",
              },
              description:
                "The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as\ncode and can result in XSS attacks.",
              attribute: "src",
            },
            {
              kind: "field",
              name: "mode",
              type: {
                text: "'cors' | 'no-cors' | 'same-origin'",
              },
              default: "'cors'",
              description: "The fetch mode to use.",
              attribute: "mode",
            },
            {
              kind: "field",
              name: "allowScripts",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as\ncode and can result in XSS attacks.",
              attribute: "allow-scripts",
            },
            {
              kind: "method",
              name: "executeScript",
              privacy: "private",
              parameters: [
                {
                  name: "script",
                  type: {
                    text: "HTMLScriptElement",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleSrcChange",
            },
          ],
          events: [
            {
              description: "Emitted when the included file is loaded.",
              name: "sl-load",
              reactName: "onSlLoad",
              eventName: "SlLoadEvent",
            },
            {
              type: {
                text: "{ status: number }",
              },
              description:
                "Emitted when the included file fails to load due to an error.",
              name: "sl-error",
              reactName: "onSlError",
              eventName: "SlErrorEvent",
            },
          ],
          attributes: [
            {
              name: "src",
              type: {
                text: "string",
              },
              description:
                "The location of the HTML file to include. Be sure you trust the content you are including as it will be executed as\ncode and can result in XSS attacks.",
              fieldName: "src",
            },
            {
              name: "mode",
              type: {
                text: "'cors' | 'no-cors' | 'same-origin'",
              },
              default: "'cors'",
              description: "The fetch mode to use.",
              fieldName: "mode",
            },
            {
              name: "allow-scripts",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Allows included scripts to be executed. Be sure you trust the content you are including as it will be executed as\ncode and can result in XSS attacks.",
              fieldName: "allowScripts",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Includes give you the power to embed external HTML files into the page.",
          tagNameWithoutPrefix: "include",
          tagName: "sl-include",
          customElement: true,
          jsDoc:
            "/**\n * @summary Includes give you the power to embed external HTML files into the page.\n * @documentation https://shoelace.style/components/include\n * @status stable\n * @since 2.0\n *\n * @event sl-load - Emitted when the included file is loaded.\n * @event {{ status: number }} sl-error - Emitted when the included file fails to load due to an error.\n */",
          documentation: "https://shoelace.style/components/include",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlInclude",
            module: "components/include/include.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/input/input.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlInput",
          cssParts: [
            {
              description:
                "The form control that wraps the label, input, and help text.",
              name: "form-control",
            },
            {
              description: "The label's wrapper.",
              name: "form-control-label",
            },
            {
              description: "The input's wrapper.",
              name: "form-control-input",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The internal `<input>` control.",
              name: "input",
            },
            {
              description: "The container that wraps the prefix.",
              name: "prefix",
            },
            {
              description: "The clear button.",
              name: "clear-button",
            },
            {
              description: "The password toggle button.",
              name: "password-toggle-button",
            },
            {
              description: "The container that wraps the suffix.",
              name: "suffix",
            },
          ],
          slots: [
            {
              description:
                "The input's label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Used to prepend a presentational icon or similar element to the input.",
              name: "prefix",
            },
            {
              description:
                "Used to append a presentational icon or similar element to the input.",
              name: "suffix",
            },
            {
              description: "An icon to use in lieu of the default clear icon.",
              name: "clear-icon",
            },
            {
              description:
                "An icon to use in lieu of the default show password icon.",
              name: "show-password-icon",
            },
            {
              description:
                "An icon to use in lieu of the default hide password icon.",
              name: "hide-password-icon",
            },
            {
              description:
                "Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default:
                "new FormControlController(this, { assumeInteractionOn: ['sl-blur', 'sl-input'] })",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text', 'label')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              attribute: "title",
            },
            {
              kind: "field",
              name: "__numberInput",
              privacy: "private",
            },
            {
              kind: "field",
              name: "__dateInput",
              privacy: "private",
            },
            {
              kind: "field",
              name: "type",
              type: {
                text: "| 'date'\n    | 'datetime-local'\n    | 'email'\n    | 'number'\n    | 'password'\n    | 'search'\n    | 'tel'\n    | 'text'\n    | 'time'\n    | 'url'",
              },
              default: "'text'",
              description:
                "The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults\nto `text`.",
              attribute: "type",
              reflects: true,
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the input, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the input, submitted as a name/value pair with form data.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "defaultValue",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The input's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "filled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a filled input.",
              attribute: "filled",
              reflects: true,
            },
            {
              kind: "field",
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style input with rounded edges.",
              attribute: "pill",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The input's label. If you need to display HTML, use the `label` slot instead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The input's help text. If you need to display HTML, use the `help-text` slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "clearable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Adds a clear button when the input is not empty.",
              attribute: "clearable",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the input.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "placeholder",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Placeholder text to show as a hint when the input is empty.",
              attribute: "placeholder",
            },
            {
              kind: "field",
              name: "readonly",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the input readonly.",
              attribute: "readonly",
              reflects: true,
            },
            {
              kind: "field",
              name: "passwordToggle",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Adds a button to toggle the password's visibility. Only applies to password types.",
              attribute: "password-toggle",
            },
            {
              kind: "field",
              name: "passwordVisible",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Determines whether or not the password is currently visible. Only applies to password input types.",
              attribute: "password-visible",
            },
            {
              kind: "field",
              name: "noSpinButtons",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Hides the browser's built-in increment/decrement spin buttons for number inputs.",
              attribute: "no-spin-buttons",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the input a required field.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "pattern",
              type: {
                text: "string",
              },
              description:
                "A regular expression pattern to validate input against.",
              attribute: "pattern",
            },
            {
              kind: "field",
              name: "minlength",
              type: {
                text: "number",
              },
              description:
                "The minimum length of input that will be considered valid.",
              attribute: "minlength",
            },
            {
              kind: "field",
              name: "maxlength",
              type: {
                text: "number",
              },
              description:
                "The maximum length of input that will be considered valid.",
              attribute: "maxlength",
            },
            {
              kind: "field",
              name: "min",
              type: {
                text: "number | string",
              },
              description:
                "The input's minimum value. Only applies to date and number input types.",
              attribute: "min",
            },
            {
              kind: "field",
              name: "max",
              type: {
                text: "number | string",
              },
              description:
                "The input's maximum value. Only applies to date and number input types.",
              attribute: "max",
            },
            {
              kind: "field",
              name: "step",
              type: {
                text: "number | 'any'",
              },
              description:
                "Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is\nimplied, allowing any numeric value. Only applies to date and number input types.",
              attribute: "step",
            },
            {
              kind: "field",
              name: "autocapitalize",
              type: {
                text: "'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'",
              },
              description:
                "Controls whether and how text input is automatically capitalized as it is entered by the user.",
              attribute: "autocapitalize",
            },
            {
              kind: "field",
              name: "autocorrect",
              type: {
                text: "'off' | 'on'",
              },
              description:
                "Indicates whether the browser's autocorrect feature is on or off.",
              attribute: "autocorrect",
            },
            {
              kind: "field",
              name: "autocomplete",
              type: {
                text: "string",
              },
              description:
                "Specifies what permission the browser has to provide assistance in filling out form field values. Refer to\n[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.",
              attribute: "autocomplete",
            },
            {
              kind: "field",
              name: "autofocus",
              type: {
                text: "boolean",
              },
              description:
                "Indicates that the input should receive focus on page load.",
              attribute: "autofocus",
            },
            {
              kind: "field",
              name: "enterkeyhint",
              type: {
                text: "'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",
              },
              description:
                "Used to customize the label or icon of the Enter key on virtual keyboards.",
              attribute: "enterkeyhint",
            },
            {
              kind: "field",
              name: "spellcheck",
              type: {
                text: "boolean",
              },
              default: "true",
              description: "Enables spell checking on the input.",
              attribute: "spellcheck",
            },
            {
              kind: "field",
              name: "inputmode",
              type: {
                text: "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",
              },
              description:
                "Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual\nkeyboard on supportive devices.",
              attribute: "inputmode",
            },
            {
              kind: "field",
              name: "valueAsDate",
              description:
                'Gets or sets the current value as a `Date` object. Returns `null` if the value can\'t be converted. This will use the native `<input type="{{type}}">` implementation and may result in an error.',
            },
            {
              kind: "field",
              name: "valueAsNumber",
              description:
                "Gets or sets the current value as a number. Returns `NaN` if the value can't be converted.",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleClearClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInput",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handlePasswordToggle",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleStepChange",
            },
            {
              kind: "method",
              name: "handleValueChange",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the input.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the input.",
            },
            {
              kind: "method",
              name: "select",
              description: "Selects all the text in the input.",
            },
            {
              kind: "method",
              name: "setSelectionRange",
              parameters: [
                {
                  name: "selectionStart",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "selectionEnd",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "selectionDirection",
                  default: "'none'",
                  type: {
                    text: "'forward' | 'backward' | 'none'",
                  },
                },
              ],
              description:
                "Sets the start and end positions of the text selection (0-based).",
            },
            {
              kind: "method",
              name: "setRangeText",
              parameters: [
                {
                  name: "replacement",
                  type: {
                    text: "string",
                  },
                },
                {
                  name: "start",
                  optional: true,
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "end",
                  optional: true,
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "selectMode",
                  default: "'preserve'",
                  type: {
                    text: "'select' | 'start' | 'end' | 'preserve'",
                  },
                },
              ],
              description: "Replaces a range of text with a new string.",
            },
            {
              kind: "method",
              name: "showPicker",
              description:
                "Displays the browser picker for an input element (only works if the browser supports it for the input type).",
            },
            {
              kind: "method",
              name: "stepUp",
              description:
                "Increments the value of a numeric input type by the value of the step attribute.",
            },
            {
              kind: "method",
              name: "stepDown",
              description:
                "Decrements the value of a numeric input type by the value of the step attribute.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
          ],
          events: [
            {
              description: "Emitted when the control loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description:
                "Emitted when an alteration to the control's value is committed by the user.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the clear button is activated.",
              name: "sl-clear",
              reactName: "onSlClear",
              eventName: "SlClearEvent",
            },
            {
              description: "Emitted when the control gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description: "Emitted when the control receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              fieldName: "title",
            },
            {
              name: "type",
              type: {
                text: "| 'date'\n    | 'datetime-local'\n    | 'email'\n    | 'number'\n    | 'password'\n    | 'search'\n    | 'tel'\n    | 'text'\n    | 'time'\n    | 'url'",
              },
              default: "'text'",
              description:
                "The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults\nto `text`.",
              fieldName: "type",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the input, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the input, submitted as a name/value pair with form data.",
              fieldName: "value",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The input's size.",
              fieldName: "size",
            },
            {
              name: "filled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a filled input.",
              fieldName: "filled",
            },
            {
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style input with rounded edges.",
              fieldName: "pill",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The input's label. If you need to display HTML, use the `label` slot instead.",
              fieldName: "label",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The input's help text. If you need to display HTML, use the `help-text` slot instead.",
              fieldName: "helpText",
            },
            {
              name: "clearable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Adds a clear button when the input is not empty.",
              fieldName: "clearable",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the input.",
              fieldName: "disabled",
            },
            {
              name: "placeholder",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Placeholder text to show as a hint when the input is empty.",
              fieldName: "placeholder",
            },
            {
              name: "readonly",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the input readonly.",
              fieldName: "readonly",
            },
            {
              name: "password-toggle",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Adds a button to toggle the password's visibility. Only applies to password types.",
              fieldName: "passwordToggle",
            },
            {
              name: "password-visible",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Determines whether or not the password is currently visible. Only applies to password input types.",
              fieldName: "passwordVisible",
            },
            {
              name: "no-spin-buttons",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Hides the browser's built-in increment/decrement spin buttons for number inputs.",
              fieldName: "noSpinButtons",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the input a required field.",
              fieldName: "required",
            },
            {
              name: "pattern",
              type: {
                text: "string",
              },
              description:
                "A regular expression pattern to validate input against.",
              fieldName: "pattern",
            },
            {
              name: "minlength",
              type: {
                text: "number",
              },
              description:
                "The minimum length of input that will be considered valid.",
              fieldName: "minlength",
            },
            {
              name: "maxlength",
              type: {
                text: "number",
              },
              description:
                "The maximum length of input that will be considered valid.",
              fieldName: "maxlength",
            },
            {
              name: "min",
              type: {
                text: "number | string",
              },
              description:
                "The input's minimum value. Only applies to date and number input types.",
              fieldName: "min",
            },
            {
              name: "max",
              type: {
                text: "number | string",
              },
              description:
                "The input's maximum value. Only applies to date and number input types.",
              fieldName: "max",
            },
            {
              name: "step",
              type: {
                text: "number | 'any'",
              },
              description:
                "Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is\nimplied, allowing any numeric value. Only applies to date and number input types.",
              fieldName: "step",
            },
            {
              name: "autocapitalize",
              type: {
                text: "'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'",
              },
              description:
                "Controls whether and how text input is automatically capitalized as it is entered by the user.",
              fieldName: "autocapitalize",
            },
            {
              name: "autocorrect",
              type: {
                text: "'off' | 'on'",
              },
              description:
                "Indicates whether the browser's autocorrect feature is on or off.",
              fieldName: "autocorrect",
            },
            {
              name: "autocomplete",
              type: {
                text: "string",
              },
              description:
                "Specifies what permission the browser has to provide assistance in filling out form field values. Refer to\n[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.",
              fieldName: "autocomplete",
            },
            {
              name: "autofocus",
              type: {
                text: "boolean",
              },
              description:
                "Indicates that the input should receive focus on page load.",
              fieldName: "autofocus",
            },
            {
              name: "enterkeyhint",
              type: {
                text: "'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",
              },
              description:
                "Used to customize the label or icon of the Enter key on virtual keyboards.",
              fieldName: "enterkeyhint",
            },
            {
              name: "spellcheck",
              type: {
                text: "boolean",
              },
              default: "true",
              description: "Enables spell checking on the input.",
              fieldName: "spellcheck",
            },
            {
              name: "inputmode",
              type: {
                text: "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",
              },
              description:
                "Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual\nkeyboard on supportive devices.",
              fieldName: "inputmode",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Inputs collect data from the user.",
          tagNameWithoutPrefix: "input",
          tagName: "sl-input",
          customElement: true,
          jsDoc:
            "/**\n * @summary Inputs collect data from the user.\n * @documentation https://shoelace.style/components/input\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @slot label - The input's label. Alternatively, you can use the `label` attribute.\n * @slot prefix - Used to prepend a presentational icon or similar element to the input.\n * @slot suffix - Used to append a presentational icon or similar element to the input.\n * @slot clear-icon - An icon to use in lieu of the default clear icon.\n * @slot show-password-icon - An icon to use in lieu of the default show password icon.\n * @slot hide-password-icon - An icon to use in lieu of the default hide password icon.\n * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-blur - Emitted when the control loses focus.\n * @event sl-change - Emitted when an alteration to the control's value is committed by the user.\n * @event sl-clear - Emitted when the clear button is activated.\n * @event sl-focus - Emitted when the control gains focus.\n * @event sl-input - Emitted when the control receives input.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart form-control - The form control that wraps the label, input, and help text.\n * @csspart form-control-label - The label's wrapper.\n * @csspart form-control-input - The input's wrapper.\n * @csspart form-control-help-text - The help text's wrapper.\n * @csspart base - The component's base wrapper.\n * @csspart input - The internal `<input>` control.\n * @csspart prefix - The container that wraps the prefix.\n * @csspart clear-button - The clear button.\n * @csspart password-toggle-button - The password toggle button.\n * @csspart suffix - The container that wraps the suffix.\n */",
          documentation: "https://shoelace.style/components/input",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlInput",
            module: "components/input/input.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/menu-item/menu-item.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlMenuItem",
          cssProperties: [
            {
              description:
                "The distance submenus shift to overlap the parent menu.",
              name: "--submenu-offset",
              default: "-2px",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The checked icon, which is only visible when the menu item is checked.",
              name: "checked-icon",
            },
            {
              description: "The prefix container.",
              name: "prefix",
            },
            {
              description: "The menu item label.",
              name: "label",
            },
            {
              description: "The suffix container.",
              name: "suffix",
            },
            {
              description:
                "The spinner that shows when the menu item is in the loading state.",
              name: "spinner",
            },
            {
              description: "The spinner's base part.",
              name: "spinner__base",
            },
            {
              description:
                "The submenu icon, visible only when the menu item has a submenu (not yet implemented).",
              name: "submenu-icon",
            },
          ],
          slots: [
            {
              description: "The menu item's label.",
              name: "",
            },
            {
              description:
                "Used to prepend an icon or similar element to the menu item.",
              name: "prefix",
            },
            {
              description:
                "Used to append an icon or similar element to the menu item.",
              name: "suffix",
            },
            {
              description: "Used to denote a nested menu.",
              name: "submenu",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default:
                "{ 'sl-icon': SlIcon, 'sl-popup': SlPopup, 'sl-spinner': SlSpinner }",
            },
            {
              kind: "field",
              name: "cachedTextLabel",
              type: {
                text: "string",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "menuItem",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "type",
              type: {
                text: "'normal' | 'checkbox'",
              },
              default: "'normal'",
              description:
                "The type of menu item to render. To use `checked`, this value must be set to `checkbox`.",
              attribute: "type",
            },
            {
              kind: "field",
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the item in a checked state.",
              attribute: "checked",
              reflects: true,
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A unique value to store in the menu item. This can be used as a way to identify menu items when selected.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "loading",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the menu item in a loading state.",
              attribute: "loading",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the menu item in a disabled state, preventing selection.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'submenu')",
            },
            {
              kind: "field",
              name: "submenuController",
              type: {
                text: "SubmenuController",
              },
              privacy: "private",
              default: "new SubmenuController(this, this.hasSlotController)",
            },
            {
              kind: "method",
              name: "handleDefaultSlotChange",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleHostClick",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleMouseOver",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleCheckedChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleTypeChange",
            },
            {
              kind: "method",
              name: "getTextLabel",
              description:
                "Returns a text label based on the contents of the menu item's default slot.",
            },
            {
              kind: "method",
              name: "isSubmenu",
            },
          ],
          attributes: [
            {
              name: "type",
              type: {
                text: "'normal' | 'checkbox'",
              },
              default: "'normal'",
              description:
                "The type of menu item to render. To use `checked`, this value must be set to `checkbox`.",
              fieldName: "type",
            },
            {
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the item in a checked state.",
              fieldName: "checked",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A unique value to store in the menu item. This can be used as a way to identify menu items when selected.",
              fieldName: "value",
            },
            {
              name: "loading",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the menu item in a loading state.",
              fieldName: "loading",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the menu item in a disabled state, preventing selection.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Menu items provide options for the user to pick from in a menu.",
          tagNameWithoutPrefix: "menu-item",
          tagName: "sl-menu-item",
          customElement: true,
          jsDoc:
            "/**\n * @summary Menu items provide options for the user to pick from in a menu.\n * @documentation https://shoelace.style/components/menu-item\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n * @dependency sl-popup\n * @dependency sl-spinner\n *\n * @slot - The menu item's label.\n * @slot prefix - Used to prepend an icon or similar element to the menu item.\n * @slot suffix - Used to append an icon or similar element to the menu item.\n * @slot submenu - Used to denote a nested menu.\n *\n * @csspart base - The component's base wrapper.\n * @csspart checked-icon - The checked icon, which is only visible when the menu item is checked.\n * @csspart prefix - The prefix container.\n * @csspart label - The menu item label.\n * @csspart suffix - The suffix container.\n * @csspart spinner - The spinner that shows when the menu item is in the loading state.\n * @csspart spinner__base - The spinner's base part.\n * @csspart submenu-icon - The submenu icon, visible only when the menu item has a submenu (not yet implemented).\n *\n * @cssproperty [--submenu-offset=-2px] - The distance submenus shift to overlap the parent menu.\n */",
          documentation: "https://shoelace.style/components/menu-item",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon", "sl-popup", "sl-spinner"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlMenuItem",
            module: "components/menu-item/menu-item.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/mutation-observer/mutation-observer.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlMutationObserver",
          slots: [
            {
              description: "The content to watch for mutations.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "mutationObserver",
              type: {
                text: "MutationObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "attr",
              type: {
                text: "string",
              },
              description:
                'Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.\n`attr="class id title"`. To watch all attributes, use `*`.',
              attribute: "attr",
              reflects: true,
            },
            {
              kind: "field",
              name: "attrOldValue",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the attribute's previous value should be recorded when monitoring changes.",
              attribute: "attr-old-value",
              reflects: true,
            },
            {
              kind: "field",
              name: "charData",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Watches for changes to the character data contained within the node.",
              attribute: "char-data",
              reflects: true,
            },
            {
              kind: "field",
              name: "charDataOldValue",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the previous value of the node's text should be recorded.",
              attribute: "char-data-old-value",
              reflects: true,
            },
            {
              kind: "field",
              name: "childList",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Watches for the addition or removal of new child nodes.",
              attribute: "child-list",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the observer.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "handleMutation",
              privacy: "private",
            },
            {
              kind: "method",
              name: "startObserver",
              privacy: "private",
            },
            {
              kind: "method",
              name: "stopObserver",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleChange",
            },
          ],
          events: [
            {
              type: {
                text: "{ mutationList: MutationRecord[] }",
              },
              description: "Emitted when a mutation occurs.",
              name: "sl-mutation",
              reactName: "onSlMutation",
              eventName: "SlMutationEvent",
            },
          ],
          attributes: [
            {
              name: "attr",
              type: {
                text: "string",
              },
              description:
                'Watches for changes to attributes. To watch only specific attributes, separate them by a space, e.g.\n`attr="class id title"`. To watch all attributes, use `*`.',
              fieldName: "attr",
            },
            {
              name: "attr-old-value",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the attribute's previous value should be recorded when monitoring changes.",
              fieldName: "attrOldValue",
            },
            {
              name: "char-data",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Watches for changes to the character data contained within the node.",
              fieldName: "charData",
            },
            {
              name: "char-data-old-value",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the previous value of the node's text should be recorded.",
              fieldName: "charDataOldValue",
            },
            {
              name: "child-list",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Watches for the addition or removal of new child nodes.",
              fieldName: "childList",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the observer.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).",
          tagNameWithoutPrefix: "mutation-observer",
          tagName: "sl-mutation-observer",
          customElement: true,
          jsDoc:
            "/**\n * @summary The Mutation Observer component offers a thin, declarative interface to the [`MutationObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).\n * @documentation https://shoelace.style/components/mutation-observer\n * @status stable\n * @since 2.0\n *\n * @event {{ mutationList: MutationRecord[] }} sl-mutation - Emitted when a mutation occurs.\n *\n * @slot - The content to watch for mutations.\n */",
          documentation: "https://shoelace.style/components/mutation-observer",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlMutationObserver",
            module: "components/mutation-observer/mutation-observer.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/menu-label/menu-label.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlMenuLabel",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          slots: [
            {
              description: "The menu label's content.",
              name: "",
            },
          ],
          members: [],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Menu labels are used to describe a group of menu items.",
          tagNameWithoutPrefix: "menu-label",
          tagName: "sl-menu-label",
          customElement: true,
          jsDoc:
            "/**\n * @summary Menu labels are used to describe a group of menu items.\n * @documentation https://shoelace.style/components/menu-label\n * @status stable\n * @since 2.0\n *\n * @slot - The menu label's content.\n *\n * @csspart base - The component's base wrapper.\n */",
          documentation: "https://shoelace.style/components/menu-label",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlMenuLabel",
            module: "components/menu-label/menu-label.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/menu/menu.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlMenu",
          slots: [
            {
              description:
                "The menu's content, including menu items, menu labels, and dividers.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "isMenuItem",
              privacy: "private",
              parameters: [
                {
                  name: "item",
                  type: {
                    text: "HTMLElement",
                  },
                },
              ],
            },
          ],
          events: [
            {
              type: {
                text: "{ item: SlMenuItem }",
              },
              description: "Emitted when a menu item is selected.",
              name: "sl-select",
              reactName: "onSlSelect",
              eventName: "SlSelectEvent",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Menus provide a list of options for the user to choose from.",
          tagNameWithoutPrefix: "menu",
          tagName: "sl-menu",
          customElement: true,
          jsDoc:
            "/**\n * @summary Menus provide a list of options for the user to choose from.\n * @documentation https://shoelace.style/components/menu\n * @status stable\n * @since 2.0\n *\n * @slot - The menu's content, including menu items, menu labels, and dividers.\n *\n * @event {{ item: SlMenuItem }} sl-select - Emitted when a menu item is selected.\n */",
          documentation: "https://shoelace.style/components/menu",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlMenu",
            module: "components/menu/menu.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/option/option.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlOption",
          cssParts: [
            {
              description: "The checked icon, an `<sl-icon>` element.",
              name: "checked-icon",
            },
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The option's label.",
              name: "label",
            },
            {
              description: "The container that wraps the prefix.",
              name: "prefix",
            },
            {
              description: "The container that wraps the suffix.",
              name: "suffix",
            },
          ],
          slots: [
            {
              description: "The option's label.",
              name: "",
            },
            {
              description:
                "Used to prepend an icon or similar element to the menu item.",
              name: "prefix",
            },
            {
              description:
                "Used to append an icon or similar element to the menu item.",
              name: "suffix",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "current",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "selected",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "hasHover",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The option's value. When selected, the containing form control will receive this value. The value must be unique\nfrom other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing\nmultiple values.",
              attribute: "value",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the option in a disabled state, preventing selection.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleDefaultSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleMouseEnter",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleMouseLeave",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleSelectedChange",
            },
            {
              kind: "method",
              name: "handleValueChange",
            },
            {
              kind: "method",
              name: "getTextLabel",
              description:
                "Returns a plain text label based on the option's content.",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The option's value. When selected, the containing form control will receive this value. The value must be unique\nfrom other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing\nmultiple values.",
              fieldName: "value",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the option in a disabled state, preventing selection.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Options define the selectable items within various form controls such as [select](/components/select).",
          tagNameWithoutPrefix: "option",
          tagName: "sl-option",
          customElement: true,
          jsDoc:
            "/**\n * @summary Options define the selectable items within various form controls such as [select](/components/select).\n * @documentation https://shoelace.style/components/option\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @slot - The option's label.\n * @slot prefix - Used to prepend an icon or similar element to the menu item.\n * @slot suffix - Used to append an icon or similar element to the menu item.\n *\n * @csspart checked-icon - The checked icon, an `<sl-icon>` element.\n * @csspart base - The component's base wrapper.\n * @csspart label - The option's label.\n * @csspart prefix - The container that wraps the prefix.\n * @csspart suffix - The container that wraps the suffix.\n */",
          documentation: "https://shoelace.style/components/option",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlOption",
            module: "components/option/option.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/popup/popup.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlPopup",
          cssProperties: [
            {
              description:
                "The size of the arrow. Note that an arrow won't be shown unless the `arrow` attribute is used.",
              name: "--arrow-size",
              default: "6px",
            },
            {
              description: "The color of the arrow.",
              name: "--arrow-color",
              default: "var(--sl-color-neutral-0)",
            },
            {
              description:
                "A read-only custom property that determines the amount of width the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`.",
              name: "--auto-size-available-width",
            },
            {
              description:
                "A read-only custom property that determines the amount of height the popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only available when using `auto-size`.",
              name: "--auto-size-available-height",
            },
          ],
          cssParts: [
            {
              description:
                "The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and maybe a border or box shadow.",
              name: "arrow",
            },
            {
              description:
                "The popup's container. Useful for setting a background color, box shadow, etc.",
              name: "popup",
            },
            {
              description:
                "The hover bridge element. Only available when the `hover-bridge` option is enabled.",
              name: "hover-bridge",
            },
          ],
          slots: [
            {
              description: "The popup's content.",
              name: "",
            },
            {
              description:
                "The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the `anchor` attribute or property instead.",
              name: "anchor",
            },
          ],
          members: [
            {
              kind: "field",
              name: "anchorEl",
              type: {
                text: "Element | VirtualElement | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "cleanup",
              type: {
                text: "ReturnType<typeof autoUpdate> | undefined",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "popup",
              type: {
                text: "HTMLElement",
              },
              description:
                "A reference to the internal popup container. Useful for animating and styling the popup with JavaScript.",
            },
            {
              kind: "field",
              name: "arrowEl",
              type: {
                text: "HTMLElement",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "anchor",
              type: {
                text: "Element | string | VirtualElement",
              },
              description:
                "The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor\nelement `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the\n`anchor` slot instead.",
              attribute: "anchor",
            },
            {
              kind: "field",
              name: "active",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn\ndown and the popup will be hidden.",
              attribute: "active",
              reflects: true,
            },
            {
              kind: "field",
              name: "placement",
              type: {
                text: "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
              },
              default: "'top'",
              description:
                "The preferred placement of the popup. Note that the actual placement will vary as configured to keep the\npanel inside of the viewport.",
              attribute: "placement",
              reflects: true,
            },
            {
              kind: "field",
              name: "strategy",
              type: {
                text: "'absolute' | 'fixed'",
              },
              default: "'absolute'",
              description:
                "Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is\nclipped, using a `fixed` position strategy can often workaround it.",
              attribute: "strategy",
              reflects: true,
            },
            {
              kind: "field",
              name: "distance",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel away from its anchor.",
              attribute: "distance",
            },
            {
              kind: "field",
              name: "skidding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel along its anchor.",
              attribute: "skidding",
            },
            {
              kind: "field",
              name: "arrow",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and\n`--arrow-color` custom properties. For additional customizations, you can also target the arrow using\n`::part(arrow)` in your stylesheet.",
              attribute: "arrow",
            },
            {
              kind: "field",
              name: "arrowPlacement",
              type: {
                text: "'start' | 'end' | 'center' | 'anchor'",
              },
              default: "'anchor'",
              description:
                "The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the\nanchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will\nalign the arrow to the start, end, or center of the popover instead.",
              attribute: "arrow-placement",
            },
            {
              kind: "field",
              name: "arrowPadding",
              type: {
                text: "number",
              },
              default: "10",
              description:
                "The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,\nthis will prevent it from overflowing the corners.",
              attribute: "arrow-padding",
            },
            {
              kind: "field",
              name: "flip",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, placement of the popup will flip to the opposite site to keep it in view. You can use\n`flipFallbackPlacements` to further configure how the fallback placement is determined.",
              attribute: "flip",
            },
            {
              kind: "field",
              name: "flipFallbackPlacements",
              type: {
                text: "string",
              },
              default: "''",
              description:
                'If the preferred placement doesn\'t fit, popup will be tested in these fallback placements until one fits. Must be a\nstring of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip\nfallback strategy will be used instead.',
              attribute: "flip-fallback-placements",
            },
            {
              kind: "field",
              name: "flipFallbackStrategy",
              type: {
                text: "'best-fit' | 'initial'",
              },
              default: "'best-fit'",
              description:
                "When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether\nthe popup should be positioned using the best available fit based on available space or as it was initially\npreferred.",
              attribute: "flip-fallback-strategy",
            },
            {
              kind: "field",
              name: "flipBoundary",
              type: {
                text: "Element | Element[]",
              },
              description:
                "The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By\ndefault, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can\nchange the boundary by passing a reference to one or more elements to this property.",
              attribute: "flipBoundary",
            },
            {
              kind: "field",
              name: "flipPadding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The amount of padding, in pixels, to exceed before the flip behavior will occur.",
              attribute: "flip-padding",
            },
            {
              kind: "field",
              name: "shift",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Moves the popup along the axis to keep it in view when clipped.",
              attribute: "shift",
            },
            {
              kind: "field",
              name: "shiftBoundary",
              type: {
                text: "Element | Element[]",
              },
              description:
                "The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By\ndefault, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can\nchange the boundary by passing a reference to one or more elements to this property.",
              attribute: "shiftBoundary",
            },
            {
              kind: "field",
              name: "shiftPadding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The amount of padding, in pixels, to exceed before the shift behavior will occur.",
              attribute: "shift-padding",
            },
            {
              kind: "field",
              name: "autoSize",
              type: {
                text: "'horizontal' | 'vertical' | 'both'",
              },
              description:
                "When set, this will cause the popup to automatically resize itself to prevent it from overflowing.",
              attribute: "auto-size",
            },
            {
              kind: "field",
              name: "sync",
              type: {
                text: "'width' | 'height' | 'both'",
              },
              description:
                "Syncs the popup's width or height to that of the anchor element.",
              attribute: "sync",
            },
            {
              kind: "field",
              name: "autoSizeBoundary",
              type: {
                text: "Element | Element[]",
              },
              description:
                "The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By\ndefault, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can\nchange the boundary by passing a reference to one or more elements to this property.",
              attribute: "autoSizeBoundary",
            },
            {
              kind: "field",
              name: "autoSizePadding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The amount of padding, in pixels, to exceed before the auto-size behavior will occur.",
              attribute: "auto-size-padding",
            },
            {
              kind: "field",
              name: "hoverBridge",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                'When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the\ngap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane\nbecause the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is\nactive.',
              attribute: "hover-bridge",
            },
            {
              kind: "method",
              name: "handleAnchorChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "start",
              privacy: "private",
            },
            {
              kind: "method",
              name: "stop",
              privacy: "private",
              return: {
                type: {
                  text: "Promise<void>",
                },
              },
            },
            {
              kind: "method",
              name: "reposition",
              description:
                "Forces the popup to recalculate and reposition itself.",
            },
            {
              kind: "field",
              name: "updateHoverBridge",
              privacy: "private",
            },
          ],
          events: [
            {
              description:
                "Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive operations in your listener or consider debouncing it.",
              name: "sl-reposition",
              reactName: "onSlReposition",
              eventName: "SlRepositionEvent",
            },
          ],
          attributes: [
            {
              name: "anchor",
              type: {
                text: "Element | string | VirtualElement",
              },
              description:
                "The element the popup will be anchored to. If the anchor lives outside of the popup, you can provide the anchor\nelement `id`, a DOM element reference, or a `VirtualElement`. If the anchor lives inside the popup, use the\n`anchor` slot instead.",
              fieldName: "anchor",
            },
            {
              name: "active",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Activates the positioning logic and shows the popup. When this attribute is removed, the positioning logic is torn\ndown and the popup will be hidden.",
              fieldName: "active",
            },
            {
              name: "placement",
              type: {
                text: "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
              },
              default: "'top'",
              description:
                "The preferred placement of the popup. Note that the actual placement will vary as configured to keep the\npanel inside of the viewport.",
              fieldName: "placement",
            },
            {
              name: "strategy",
              type: {
                text: "'absolute' | 'fixed'",
              },
              default: "'absolute'",
              description:
                "Determines how the popup is positioned. The `absolute` strategy works well in most cases, but if overflow is\nclipped, using a `fixed` position strategy can often workaround it.",
              fieldName: "strategy",
            },
            {
              name: "distance",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel away from its anchor.",
              fieldName: "distance",
            },
            {
              name: "skidding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the panel along its anchor.",
              fieldName: "skidding",
            },
            {
              name: "arrow",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Attaches an arrow to the popup. The arrow's size and color can be customized using the `--arrow-size` and\n`--arrow-color` custom properties. For additional customizations, you can also target the arrow using\n`::part(arrow)` in your stylesheet.",
              fieldName: "arrow",
            },
            {
              name: "arrow-placement",
              type: {
                text: "'start' | 'end' | 'center' | 'anchor'",
              },
              default: "'anchor'",
              description:
                "The placement of the arrow. The default is `anchor`, which will align the arrow as close to the center of the\nanchor as possible, considering available space and `arrow-padding`. A value of `start`, `end`, or `center` will\nalign the arrow to the start, end, or center of the popover instead.",
              fieldName: "arrowPlacement",
            },
            {
              name: "arrow-padding",
              type: {
                text: "number",
              },
              default: "10",
              description:
                "The amount of padding between the arrow and the edges of the popup. If the popup has a border-radius, for example,\nthis will prevent it from overflowing the corners.",
              fieldName: "arrowPadding",
            },
            {
              name: "flip",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When set, placement of the popup will flip to the opposite site to keep it in view. You can use\n`flipFallbackPlacements` to further configure how the fallback placement is determined.",
              fieldName: "flip",
            },
            {
              name: "flip-fallback-placements",
              type: {
                text: "string",
              },
              default: "''",
              description:
                'If the preferred placement doesn\'t fit, popup will be tested in these fallback placements until one fits. Must be a\nstring of any number of placements separated by a space, e.g. "top bottom left". If no placement fits, the flip\nfallback strategy will be used instead.',
              fieldName: "flipFallbackPlacements",
            },
            {
              name: "flip-fallback-strategy",
              type: {
                text: "'best-fit' | 'initial'",
              },
              default: "'best-fit'",
              description:
                "When neither the preferred placement nor the fallback placements fit, this value will be used to determine whether\nthe popup should be positioned using the best available fit based on available space or as it was initially\npreferred.",
              fieldName: "flipFallbackStrategy",
            },
            {
              name: "flipBoundary",
              type: {
                text: "Element | Element[]",
              },
              description:
                "The flip boundary describes clipping element(s) that overflow will be checked relative to when flipping. By\ndefault, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can\nchange the boundary by passing a reference to one or more elements to this property.",
              fieldName: "flipBoundary",
            },
            {
              name: "flip-padding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The amount of padding, in pixels, to exceed before the flip behavior will occur.",
              fieldName: "flipPadding",
            },
            {
              name: "shift",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Moves the popup along the axis to keep it in view when clipped.",
              fieldName: "shift",
            },
            {
              name: "shiftBoundary",
              type: {
                text: "Element | Element[]",
              },
              description:
                "The shift boundary describes clipping element(s) that overflow will be checked relative to when shifting. By\ndefault, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can\nchange the boundary by passing a reference to one or more elements to this property.",
              fieldName: "shiftBoundary",
            },
            {
              name: "shift-padding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The amount of padding, in pixels, to exceed before the shift behavior will occur.",
              fieldName: "shiftPadding",
            },
            {
              name: "auto-size",
              type: {
                text: "'horizontal' | 'vertical' | 'both'",
              },
              description:
                "When set, this will cause the popup to automatically resize itself to prevent it from overflowing.",
              fieldName: "autoSize",
            },
            {
              name: "sync",
              type: {
                text: "'width' | 'height' | 'both'",
              },
              description:
                "Syncs the popup's width or height to that of the anchor element.",
              fieldName: "sync",
            },
            {
              name: "autoSizeBoundary",
              type: {
                text: "Element | Element[]",
              },
              description:
                "The auto-size boundary describes clipping element(s) that overflow will be checked relative to when resizing. By\ndefault, the boundary includes overflow ancestors that will cause the element to be clipped. If needed, you can\nchange the boundary by passing a reference to one or more elements to this property.",
              fieldName: "autoSizeBoundary",
            },
            {
              name: "auto-size-padding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The amount of padding, in pixels, to exceed before the auto-size behavior will occur.",
              fieldName: "autoSizePadding",
            },
            {
              name: "hover-bridge",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                'When a gap exists between the anchor and the popup element, this option will add a "hover bridge" that fills the\ngap using an invisible element. This makes listening for events such as `mouseenter` and `mouseleave` more sane\nbecause the pointer never technically leaves the element. The hover bridge will only be drawn when the popover is\nactive.',
              fieldName: "hoverBridge",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            'Popup is a utility that lets you declaratively anchor "popup" containers to another element.',
          tagNameWithoutPrefix: "popup",
          tagName: "sl-popup",
          customElement: true,
          jsDoc:
            "/**\n * @summary Popup is a utility that lets you declaratively anchor \"popup\" containers to another element.\n * @documentation https://shoelace.style/components/popup\n * @status stable\n * @since 2.0\n *\n * @event sl-reposition - Emitted when the popup is repositioned. This event can fire a lot, so avoid putting expensive\n *  operations in your listener or consider debouncing it.\n *\n * @slot - The popup's content.\n * @slot anchor - The element the popup will be anchored to. If the anchor lives outside of the popup, you can use the\n *  `anchor` attribute or property instead.\n *\n * @csspart arrow - The arrow's container. Avoid setting `top|bottom|left|right` properties, as these values are\n *  assigned dynamically as the popup moves. This is most useful for applying a background color to match the popup, and\n *  maybe a border or box shadow.\n * @csspart popup - The popup's container. Useful for setting a background color, box shadow, etc.\n * @csspart hover-bridge - The hover bridge element. Only available when the `hover-bridge` option is enabled.\n *\n * @cssproperty [--arrow-size=6px] - The size of the arrow. Note that an arrow won't be shown unless the `arrow`\n *  attribute is used.\n * @cssproperty [--arrow-color=var(--sl-color-neutral-0)] - The color of the arrow.\n * @cssproperty [--auto-size-available-width] - A read-only custom property that determines the amount of width the\n *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only\n *  available when using `auto-size`.\n * @cssproperty [--auto-size-available-height] - A read-only custom property that determines the amount of height the\n *  popup can be before overflowing. Useful for positioning child elements that need to overflow. This property is only\n *  available when using `auto-size`.\n */",
          documentation: "https://shoelace.style/components/popup",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlPopup",
            module: "components/popup/popup.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/progress-bar/progress-bar.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlProgressBar",
          cssProperties: [
            {
              description: "The progress bar's height.",
              name: "--height",
            },
            {
              description: "The color of the track.",
              name: "--track-color",
            },
            {
              description: "The color of the indicator.",
              name: "--indicator-color",
            },
            {
              description: "The color of the label.",
              name: "--label-color",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The progress bar's indicator.",
              name: "indicator",
            },
            {
              description: "The progress bar's label.",
              name: "label",
            },
          ],
          slots: [
            {
              description: "A label to show inside the progress indicator.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The current progress as a percentage, 0 to 100.",
              attribute: "value",
              reflects: true,
            },
            {
              kind: "field",
              name: "indeterminate",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.",
              attribute: "indeterminate",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description: "A custom label for assistive devices.",
              attribute: "label",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The current progress as a percentage, 0 to 100.",
              fieldName: "value",
            },
            {
              name: "indeterminate",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "When true, percentage is ignored, the label is hidden, and the progress bar is drawn in an indeterminate state.",
              fieldName: "indeterminate",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description: "A custom label for assistive devices.",
              fieldName: "label",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Progress bars are used to show the status of an ongoing operation.",
          tagNameWithoutPrefix: "progress-bar",
          tagName: "sl-progress-bar",
          customElement: true,
          jsDoc:
            "/**\n * @summary Progress bars are used to show the status of an ongoing operation.\n * @documentation https://shoelace.style/components/progress-bar\n * @status stable\n * @since 2.0\n *\n * @slot - A label to show inside the progress indicator.\n *\n * @csspart base - The component's base wrapper.\n * @csspart indicator - The progress bar's indicator.\n * @csspart label - The progress bar's label.\n *\n * @cssproperty --height - The progress bar's height.\n * @cssproperty --track-color - The color of the track.\n * @cssproperty --indicator-color - The color of the indicator.\n * @cssproperty --label-color - The color of the label.\n */",
          documentation: "https://shoelace.style/components/progress-bar",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlProgressBar",
            module: "components/progress-bar/progress-bar.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/progress-ring/progress-ring.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlProgressRing",
          cssProperties: [
            {
              description:
                "The diameter of the progress ring (cannot be a percentage).",
              name: "--size",
            },
            {
              description: "The width of the track.",
              name: "--track-width",
            },
            {
              description: "The color of the track.",
              name: "--track-color",
            },
            {
              description:
                "The width of the indicator. Defaults to the track width.",
              name: "--indicator-width",
            },
            {
              description: "The color of the indicator.",
              name: "--indicator-color",
            },
            {
              description:
                "The duration of the indicator's transition when the value changes.",
              name: "--indicator-transition-duration",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The progress ring label.",
              name: "label",
            },
          ],
          slots: [
            {
              description: "A label to show inside the ring.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "indicator",
              type: {
                text: "SVGCircleElement",
              },
            },
            {
              kind: "field",
              name: "indicatorOffset",
              type: {
                text: "string",
              },
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The current progress as a percentage, 0 to 100.",
              attribute: "value",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description: "A custom label for assistive devices.",
              attribute: "label",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The current progress as a percentage, 0 to 100.",
              fieldName: "value",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description: "A custom label for assistive devices.",
              fieldName: "label",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Progress rings are used to show the progress of a determinate operation in a circular fashion.",
          tagNameWithoutPrefix: "progress-ring",
          tagName: "sl-progress-ring",
          customElement: true,
          jsDoc:
            "/**\n * @summary Progress rings are used to show the progress of a determinate operation in a circular fashion.\n * @documentation https://shoelace.style/components/progress-ring\n * @status stable\n * @since 2.0\n *\n * @slot - A label to show inside the ring.\n *\n * @csspart base - The component's base wrapper.\n * @csspart label - The progress ring label.\n *\n * @cssproperty --size - The diameter of the progress ring (cannot be a percentage).\n * @cssproperty --track-width - The width of the track.\n * @cssproperty --track-color - The color of the track.\n * @cssproperty --indicator-width - The width of the indicator. Defaults to the track width.\n * @cssproperty --indicator-color - The color of the indicator.\n * @cssproperty --indicator-transition-duration - The duration of the indicator's transition when the value changes.\n */",
          documentation: "https://shoelace.style/components/progress-ring",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlProgressRing",
            module: "components/progress-ring/progress-ring.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/radio-group/radio-group.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlRadioGroup",
          cssParts: [
            {
              description:
                "The form control that wraps the label, input, and help text.",
              name: "form-control",
            },
            {
              description: "The label's wrapper.",
              name: "form-control-label",
            },
            {
              description: "The input's wrapper.",
              name: "form-control-input",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
            {
              description: "The button group that wraps radio buttons.",
              name: "button-group",
            },
            {
              description: "The button group's `base` part.",
              name: "button-group__base",
            },
          ],
          slots: [
            {
              description:
                "The default slot where `<sl-radio>` or `<sl-radio-button>` elements are placed.",
              name: "",
            },
            {
              description:
                "The radio group's label. Required for proper accessibility. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-button-group': SlButtonGroup }",
            },
            {
              kind: "field",
              name: "formControlController",
              privacy: "protected",
              readonly: true,
              default: "new FormControlController(this)",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text', 'label')",
            },
            {
              kind: "field",
              name: "customValidityMessage",
              type: {
                text: "string",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "validationTimeout",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "validationInput",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "hasButtonGroup",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "errorMessage",
              type: {
                text: "string",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "defaultValue",
              type: {
                text: "string",
              },
              default: "''",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot\ninstead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "'option'",
              description:
                "The name of the radio group, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the radio group, submitted as a name/value pair with form data.",
              attribute: "value",
              reflects: true,
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "The radio group's size. This size will be applied to all child radios and radio buttons.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Ensures a child radio is checked before allowing the containing form to submit.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "getAllRadios",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleRadioClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleLabelClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "syncRadioElements",
              privacy: "private",
            },
            {
              kind: "method",
              name: "syncRadios",
              privacy: "private",
            },
            {
              kind: "method",
              name: "updateCheckedRadio",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleSizeChange",
            },
            {
              kind: "method",
              name: "handleValueChange",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              return: {
                type: {
                  text: "boolean",
                },
              },
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  default: "''",
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
            {
              kind: "method",
              name: "focus",
              privacy: "public",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the radio-group.",
            },
          ],
          events: [
            {
              description:
                "Emitted when the radio group's selected value changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the radio group receives user input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The radio group's label. Required for proper accessibility. If you need to display HTML, use the `label` slot\ninstead.",
              fieldName: "label",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The radio groups's help text. If you need to display HTML, use the `help-text` slot instead.",
              fieldName: "helpText",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "'option'",
              description:
                "The name of the radio group, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the radio group, submitted as a name/value pair with form data.",
              fieldName: "value",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "The radio group's size. This size will be applied to all child radios and radio buttons.",
              fieldName: "size",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Ensures a child radio is checked before allowing the containing form to submit.",
              fieldName: "required",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.",
          tagNameWithoutPrefix: "radio-group",
          tagName: "sl-radio-group",
          customElement: true,
          jsDoc:
            "/**\n * @summary Radio groups are used to group multiple [radios](/components/radio) or [radio buttons](/components/radio-button) so they function as a single form control.\n * @documentation https://shoelace.style/components/radio-group\n * @status stable\n * @since 2.0\n *\n * @dependency sl-button-group\n *\n * @slot - The default slot where `<sl-radio>` or `<sl-radio-button>` elements are placed.\n * @slot label - The radio group's label. Required for proper accessibility. Alternatively, you can use the `label`\n *  attribute.\n * @slot help-text - Text that describes how to use the radio group. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-change - Emitted when the radio group's selected value changes.\n * @event sl-input - Emitted when the radio group receives user input.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart form-control - The form control that wraps the label, input, and help text.\n * @csspart form-control-label - The label's wrapper.\n * @csspart form-control-input - The input's wrapper.\n * @csspart form-control-help-text - The help text's wrapper.\n * @csspart button-group - The button group that wraps radio buttons.\n * @csspart button-group__base - The button group's `base` part.\n */",
          documentation: "https://shoelace.style/components/radio-group",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-button-group"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlRadioGroup",
            module: "components/radio-group/radio-group.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/radio-button/radio-button.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlRadioButton",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The internal `<button>` element.",
              name: "button",
            },
            {
              description:
                "The internal button element when the radio button is checked.",
              name: "button--checked",
            },
            {
              description: "The container that wraps the prefix.",
              name: "prefix",
            },
            {
              description: "The container that wraps the radio button's label.",
              name: "label",
            },
            {
              description: "The container that wraps the suffix.",
              name: "suffix",
            },
          ],
          slots: [
            {
              description: "The radio button's label.",
              name: "",
            },
            {
              description: "A presentational prefix icon or similar element.",
              name: "prefix",
            },
            {
              description: "A presentational suffix icon or similar element.",
              name: "suffix",
            },
          ],
          members: [
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default:
                "new HasSlotController(this, '[default]', 'prefix', 'suffix')",
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "hiddenInput",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "protected",
              default: "false",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The radio's value. When selected, the radio group will receive this value.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the radio button.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so\nthis attribute can typically be omitted.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws a pill-style radio button with rounded edges.",
              attribute: "pill",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "e",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the radio button.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the radio button.",
            },
          ],
          events: [
            {
              description: "Emitted when the button loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the button gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The radio's value. When selected, the radio group will receive this value.",
              fieldName: "value",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the radio button.",
              fieldName: "disabled",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "The radio button's size. When used inside a radio group, the size will be determined by the radio group's size so\nthis attribute can typically be omitted.",
              fieldName: "size",
            },
            {
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws a pill-style radio button with rounded edges.",
              fieldName: "pill",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Radios buttons allow the user to select a single option from a group using a button-like control.",
          tagNameWithoutPrefix: "radio-button",
          tagName: "sl-radio-button",
          customElement: true,
          jsDoc:
            "/**\n * @summary Radios buttons allow the user to select a single option from a group using a button-like control.\n * @documentation https://shoelace.style/components/radio-button\n * @status stable\n * @since 2.0\n *\n * @slot - The radio button's label.\n * @slot prefix - A presentational prefix icon or similar element.\n * @slot suffix - A presentational suffix icon or similar element.\n *\n * @event sl-blur - Emitted when the button loses focus.\n * @event sl-focus - Emitted when the button gains focus.\n *\n * @csspart base - The component's base wrapper.\n * @csspart button - The internal `<button>` element.\n * @csspart button--checked - The internal button element when the radio button is checked.\n * @csspart prefix - The container that wraps the prefix.\n * @csspart label - The container that wraps the radio button's label.\n * @csspart suffix - The container that wraps the suffix.\n */",
          documentation: "https://shoelace.style/components/radio-button",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlRadioButton",
            module: "components/radio-button/radio-button.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/radio/radio.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlRadio",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The circular container that wraps the radio's checked state.",
              name: "control",
            },
            {
              description: "The radio control when the radio is checked.",
              name: "control--checked",
            },
            {
              description: "The checked icon, an `<sl-icon>` element.",
              name: "checked-icon",
            },
            {
              description: "The container that wraps the radio's label.",
              name: "label",
            },
          ],
          slots: [
            {
              description: "The radio's label.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "protected",
              default: "false",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The radio's value. When selected, the radio group will receive this value.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this\nattribute can typically be omitted.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the radio.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleClick",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "setInitialAttributes",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleCheckedChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
          ],
          events: [
            {
              description: "Emitted when the control loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the control gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The radio's value. When selected, the radio group will receive this value.",
              fieldName: "value",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description:
                "The radio's size. When used inside a radio group, the size will be determined by the radio group's size so this\nattribute can typically be omitted.",
              fieldName: "size",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the radio.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Radios allow the user to select a single option from a group.",
          tagNameWithoutPrefix: "radio",
          tagName: "sl-radio",
          customElement: true,
          jsDoc:
            "/**\n * @summary Radios allow the user to select a single option from a group.\n * @documentation https://shoelace.style/components/radio\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @slot - The radio's label.\n *\n * @event sl-blur - Emitted when the control loses focus.\n * @event sl-focus - Emitted when the control gains focus.\n *\n * @csspart base - The component's base wrapper.\n * @csspart control - The circular container that wraps the radio's checked state.\n * @csspart control--checked - The radio control when the radio is checked.\n * @csspart checked-icon - The checked icon, an `<sl-icon>` element.\n * @csspart label - The container that wraps the radio's label.\n */",
          documentation: "https://shoelace.style/components/radio",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlRadio",
            module: "components/radio/radio.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/qr-code/qr-code.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlQrCode",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          members: [
            {
              kind: "field",
              name: "canvas",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description: "The QR code's value.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The label for assistive devices to announce. If unspecified, the value will be used instead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "number",
              },
              default: "128",
              description: "The size of the QR code, in pixels.",
              attribute: "size",
            },
            {
              kind: "field",
              name: "fill",
              type: {
                text: "string",
              },
              default: "'black'",
              description:
                "The fill color. This can be any valid CSS color, but not a CSS custom property.",
              attribute: "fill",
            },
            {
              kind: "field",
              name: "background",
              type: {
                text: "string",
              },
              default: "'white'",
              description:
                "The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.",
              attribute: "background",
            },
            {
              kind: "field",
              name: "radius",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The edge radius of each module. Must be between 0 and 0.5.",
              attribute: "radius",
            },
            {
              kind: "field",
              name: "errorCorrection",
              type: {
                text: "'L' | 'M' | 'Q' | 'H'",
              },
              default: "'H'",
              description:
                "The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)",
              attribute: "error-correction",
            },
            {
              kind: "method",
              name: "generate",
            },
          ],
          attributes: [
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description: "The QR code's value.",
              fieldName: "value",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The label for assistive devices to announce. If unspecified, the value will be used instead.",
              fieldName: "label",
            },
            {
              name: "size",
              type: {
                text: "number",
              },
              default: "128",
              description: "The size of the QR code, in pixels.",
              fieldName: "size",
            },
            {
              name: "fill",
              type: {
                text: "string",
              },
              default: "'black'",
              description:
                "The fill color. This can be any valid CSS color, but not a CSS custom property.",
              fieldName: "fill",
            },
            {
              name: "background",
              type: {
                text: "string",
              },
              default: "'white'",
              description:
                "The background color. This can be any valid CSS color or `transparent`. It cannot be a CSS custom property.",
              fieldName: "background",
            },
            {
              name: "radius",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The edge radius of each module. Must be between 0 and 0.5.",
              fieldName: "radius",
            },
            {
              name: "error-correction",
              type: {
                text: "'L' | 'M' | 'Q' | 'H'",
              },
              default: "'H'",
              description:
                "The level of error correction to use. [Learn more](https://www.qrcode.com/en/about/error_correction.html)",
              fieldName: "errorCorrection",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).",
          tagNameWithoutPrefix: "qr-code",
          tagName: "sl-qr-code",
          customElement: true,
          jsDoc:
            "/**\n * @summary Generates a [QR code](https://www.qrcode.com/) and renders it using the [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API).\n * @documentation https://shoelace.style/components/qr-code\n * @status stable\n * @since 2.0\n *\n * @csspart base - The component's base wrapper.\n */",
          documentation: "https://shoelace.style/components/qr-code",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlQrCode",
            module: "components/qr-code/qr-code.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/relative-time/relative-time.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlRelativeTime",
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "updateTimeout",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "isoTime",
              type: {
                text: "string",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "relativeTime",
              type: {
                text: "string",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "date",
              type: {
                text: "Date | string",
              },
              default: "new Date()",
              description:
                "The date from which to calculate time from. If not set, the current date and time will be used. When passing a\nstring, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert\na date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).",
              attribute: "date",
            },
            {
              kind: "field",
              name: "format",
              type: {
                text: "'long' | 'short' | 'narrow'",
              },
              default: "'long'",
              description: "The formatting style to use.",
              attribute: "format",
            },
            {
              kind: "field",
              name: "numeric",
              type: {
                text: "'always' | 'auto'",
              },
              default: "'auto'",
              description:
                'When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as\n"1 day ago" and "in 1 day" will be shown.',
              attribute: "numeric",
            },
            {
              kind: "field",
              name: "sync",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Keep the displayed value up to date as time passes.",
              attribute: "sync",
            },
          ],
          attributes: [
            {
              name: "date",
              type: {
                text: "Date | string",
              },
              default: "new Date()",
              description:
                "The date from which to calculate time from. If not set, the current date and time will be used. When passing a\nstring, it's strongly recommended to use the ISO 8601 format to ensure timezones are handled correctly. To convert\na date to this format in JavaScript, use [`date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).",
              fieldName: "date",
            },
            {
              name: "format",
              type: {
                text: "'long' | 'short' | 'narrow'",
              },
              default: "'long'",
              description: "The formatting style to use.",
              fieldName: "format",
            },
            {
              name: "numeric",
              type: {
                text: "'always' | 'auto'",
              },
              default: "'auto'",
              description:
                'When `auto`, values such as "yesterday" and "tomorrow" will be shown when possible. When `always`, values such as\n"1 day ago" and "in 1 day" will be shown.',
              fieldName: "numeric",
            },
            {
              name: "sync",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Keep the displayed value up to date as time passes.",
              fieldName: "sync",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Outputs a localized time phrase relative to the current date and time.",
          tagNameWithoutPrefix: "relative-time",
          tagName: "sl-relative-time",
          customElement: true,
          jsDoc:
            "/**\n * @summary Outputs a localized time phrase relative to the current date and time.\n * @documentation https://shoelace.style/components/relative-time\n * @status stable\n * @since 2.0\n */",
          documentation: "https://shoelace.style/components/relative-time",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlRelativeTime",
            module: "components/relative-time/relative-time.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/range/range.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlRange",
          cssProperties: [
            {
              description: "The size of the thumb.",
              name: "--thumb-size",
            },
            {
              description:
                "The vertical distance the tooltip is offset from the track.",
              name: "--tooltip-offset",
            },
            {
              description:
                "The color of the portion of the track that represents the current value.",
              name: "--track-color-active",
            },
            {
              description:
                "The of the portion of the track that represents the remaining value.",
              name: "--track-color-inactive",
            },
            {
              description: "The height of the track.",
              name: "--track-height",
            },
            {
              description: "The point of origin of the active track.",
              name: "--track-active-offset",
            },
          ],
          cssParts: [
            {
              description:
                "The form control that wraps the label, input, and help text.",
              name: "form-control",
            },
            {
              description: "The label's wrapper.",
              name: "form-control-label",
            },
            {
              description: "The range's wrapper.",
              name: "form-control-input",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The internal `<input>` element.",
              name: "input",
            },
            {
              description: "The range's tooltip.",
              name: "tooltip",
            },
          ],
          slots: [
            {
              description:
                "The range's label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default: "new FormControlController(this)",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text', 'label')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "resizeObserver",
              type: {
                text: "ResizeObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "output",
              type: {
                text: "HTMLOutputElement | null",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "hasTooltip",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              attribute: "title",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the range, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The current value of the range, submitted as a name/value pair with form data.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The range's label. If you need to display HTML, use the `label` slot instead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The range's help text. If you need to display HTML, use the help-text slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the range.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "min",
              type: {
                text: "number",
              },
              default: "0",
              description: "The minimum acceptable value of the range.",
              attribute: "min",
            },
            {
              kind: "field",
              name: "max",
              type: {
                text: "number",
              },
              default: "100",
              description: "The maximum acceptable value of the range.",
              attribute: "max",
            },
            {
              kind: "field",
              name: "step",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "The interval at which the range will increase and decrease.",
              attribute: "step",
            },
            {
              kind: "field",
              name: "tooltip",
              type: {
                text: "'top' | 'bottom' | 'none'",
              },
              default: "'top'",
              description: "The preferred placement of the range's tooltip.",
              attribute: "tooltip",
            },
            {
              kind: "field",
              name: "tooltipFormatter",
              type: {
                text: "(value: number) => string",
              },
              description:
                "A function used to format the tooltip's value. The range's value is passed as the first and only argument. The\nfunction should return a string to display in the tooltip.",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "defaultValue",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInput",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleThumbDragStart",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleThumbDragEnd",
              privacy: "private",
            },
            {
              kind: "method",
              name: "syncProgress",
              privacy: "private",
              parameters: [
                {
                  name: "percent",
                  type: {
                    text: "number",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "syncTooltip",
              privacy: "private",
              parameters: [
                {
                  name: "percent",
                  type: {
                    text: "number",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleValueChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "syncRange",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the range.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the range.",
            },
            {
              kind: "method",
              name: "stepUp",
              description:
                "Increments the value of the range by the value of the step attribute.",
            },
            {
              kind: "method",
              name: "stepDown",
              description:
                "Decrements the value of the range by the value of the step attribute.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
          ],
          events: [
            {
              description: "Emitted when the control loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description:
                "Emitted when an alteration to the control's value is committed by the user.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the control gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description: "Emitted when the control receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              fieldName: "title",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the range, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The current value of the range, submitted as a name/value pair with form data.",
              fieldName: "value",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The range's label. If you need to display HTML, use the `label` slot instead.",
              fieldName: "label",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The range's help text. If you need to display HTML, use the help-text slot instead.",
              fieldName: "helpText",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the range.",
              fieldName: "disabled",
            },
            {
              name: "min",
              type: {
                text: "number",
              },
              default: "0",
              description: "The minimum acceptable value of the range.",
              fieldName: "min",
            },
            {
              name: "max",
              type: {
                text: "number",
              },
              default: "100",
              description: "The maximum acceptable value of the range.",
              fieldName: "max",
            },
            {
              name: "step",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "The interval at which the range will increase and decrease.",
              fieldName: "step",
            },
            {
              name: "tooltip",
              type: {
                text: "'top' | 'bottom' | 'none'",
              },
              default: "'top'",
              description: "The preferred placement of the range's tooltip.",
              fieldName: "tooltip",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Ranges allow the user to select a single value within a given range using a slider.",
          tagNameWithoutPrefix: "range",
          tagName: "sl-range",
          customElement: true,
          jsDoc:
            "/**\n * @summary Ranges allow the user to select a single value within a given range using a slider.\n * @documentation https://shoelace.style/components/range\n * @status stable\n * @since 2.0\n *\n * @slot label - The range's label. Alternatively, you can use the `label` attribute.\n * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-blur - Emitted when the control loses focus.\n * @event sl-change - Emitted when an alteration to the control's value is committed by the user.\n * @event sl-focus - Emitted when the control gains focus.\n * @event sl-input - Emitted when the control receives input.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart form-control - The form control that wraps the label, input, and help text.\n * @csspart form-control-label - The label's wrapper.\n * @csspart form-control-input - The range's wrapper.\n * @csspart form-control-help-text - The help text's wrapper.\n * @csspart base - The component's base wrapper.\n * @csspart input - The internal `<input>` element.\n * @csspart tooltip - The range's tooltip.\n *\n * @cssproperty --thumb-size - The size of the thumb.\n * @cssproperty --tooltip-offset - The vertical distance the tooltip is offset from the track.\n * @cssproperty --track-color-active - The color of the portion of the track that represents the current value.\n * @cssproperty --track-color-inactive - The of the portion of the track that represents the remaining value.\n * @cssproperty --track-height - The height of the track.\n * @cssproperty --track-active-offset - The point of origin of the active track.\n */",
          documentation: "https://shoelace.style/components/range",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlRange",
            module: "components/range/range.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/resize-observer/resize-observer.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlResizeObserver",
          slots: [
            {
              description: "One or more elements to watch for resizing.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "resizeObserver",
              type: {
                text: "ResizeObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "observedElements",
              type: {
                text: "HTMLElement[]",
              },
              privacy: "private",
              default: "[]",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the observer.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "startObserver",
              privacy: "private",
            },
            {
              kind: "method",
              name: "stopObserver",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
          ],
          events: [
            {
              type: {
                text: "{ entries: ResizeObserverEntry[] }",
              },
              description: "Emitted when the element is resized.",
              name: "sl-resize",
              reactName: "onSlResize",
              eventName: "SlResizeEvent",
            },
          ],
          attributes: [
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the observer.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).",
          tagNameWithoutPrefix: "resize-observer",
          tagName: "sl-resize-observer",
          customElement: true,
          jsDoc:
            "/**\n * @summary The Resize Observer component offers a thin, declarative interface to the [`ResizeObserver API`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).\n * @documentation https://shoelace.style/components/resize-observer\n * @status stable\n * @since 2.0\n *\n * @slot - One or more elements to watch for resizing.\n *\n * @event {{ entries: ResizeObserverEntry[] }} sl-resize - Emitted when the element is resized.\n */",
          documentation: "https://shoelace.style/components/resize-observer",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlResizeObserver",
            module: "components/resize-observer/resize-observer.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/rating/rating.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlRating",
          cssProperties: [
            {
              description: "The inactive color for symbols.",
              name: "--symbol-color",
            },
            {
              description: "The active color for symbols.",
              name: "--symbol-color-active",
            },
            {
              description: "The size of symbols.",
              name: "--symbol-size",
            },
            {
              description: "The spacing to use around symbols.",
              name: "--symbol-spacing",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon': SlIcon }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "rating",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "hoverValue",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "0",
            },
            {
              kind: "field",
              name: "isHovering",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A label that describes the rating to assistive devices.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The current rating.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "max",
              type: {
                text: "number",
              },
              default: "5",
              description: "The highest rating to show.",
              attribute: "max",
            },
            {
              kind: "field",
              name: "precision",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this\nattribute to `0.5`.",
              attribute: "precision",
            },
            {
              kind: "field",
              name: "readonly",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the rating readonly.",
              attribute: "readonly",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the rating.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "getSymbol",
              type: {
                text: "(value: number) => string",
              },
              description:
                "A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.\nThe function should return a string containing trusted HTML of the symbol to render at the specified value. Works\nwell with `<sl-icon>` elements.",
              attribute: "getSymbol",
            },
            {
              kind: "method",
              name: "getValueFromMousePosition",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "getValueFromTouchPosition",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "TouchEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "getValueFromXCoordinate",
              privacy: "private",
              parameters: [
                {
                  name: "coordinate",
                  type: {
                    text: "number",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "setValue",
              privacy: "private",
              parameters: [
                {
                  name: "newValue",
                  type: {
                    text: "number",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseEnter",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseMove",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseLeave",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleTouchStart",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "TouchEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleTouchMove",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "TouchEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleTouchEnd",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "TouchEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "roundToPrecision",
              privacy: "private",
              parameters: [
                {
                  name: "numberToRound",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "precision",
                  default: "0.5",
                },
              ],
            },
            {
              kind: "method",
              name: "handleHoverValueChange",
            },
            {
              kind: "method",
              name: "handleIsHoveringChange",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the rating.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the rating.",
            },
          ],
          events: [
            {
              description: "Emitted when the rating's value changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              type: {
                text: "{ phase: 'start' | 'move' | 'end', value: number }",
              },
              description:
                "Emitted when the user hovers over a value. The `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the rating's value would be if the user were to commit to the hovered value.",
              name: "sl-hover",
              reactName: "onSlHover",
              eventName: "SlHoverEvent",
            },
          ],
          attributes: [
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "A label that describes the rating to assistive devices.",
              fieldName: "label",
            },
            {
              name: "value",
              type: {
                text: "number",
              },
              default: "0",
              description: "The current rating.",
              fieldName: "value",
            },
            {
              name: "max",
              type: {
                text: "number",
              },
              default: "5",
              description: "The highest rating to show.",
              fieldName: "max",
            },
            {
              name: "precision",
              type: {
                text: "number",
              },
              default: "1",
              description:
                "The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this\nattribute to `0.5`.",
              fieldName: "precision",
            },
            {
              name: "readonly",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the rating readonly.",
              fieldName: "readonly",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the rating.",
              fieldName: "disabled",
            },
            {
              name: "getSymbol",
              type: {
                text: "(value: number) => string",
              },
              description:
                "A function that customizes the symbol to be rendered. The first and only argument is the rating's current value.\nThe function should return a string containing trusted HTML of the symbol to render at the specified value. Works\nwell with `<sl-icon>` elements.",
              fieldName: "getSymbol",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Ratings give users a way to quickly view and provide feedback.",
          tagNameWithoutPrefix: "rating",
          tagName: "sl-rating",
          customElement: true,
          jsDoc:
            "/**\n * @summary Ratings give users a way to quickly view and provide feedback.\n * @documentation https://shoelace.style/components/rating\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n *\n * @event sl-change - Emitted when the rating's value changes.\n * @event {{ phase: 'start' | 'move' | 'end', value: number }} sl-hover - Emitted when the user hovers over a value. The\n *  `phase` property indicates when hovering starts, moves to a new value, or ends. The `value` property tells what the\n *  rating's value would be if the user were to commit to the hovered value.\n *\n * @csspart base - The component's base wrapper.\n *\n * @cssproperty --symbol-color - The inactive color for symbols.\n * @cssproperty --symbol-color-active - The active color for symbols.\n * @cssproperty --symbol-size - The size of symbols.\n * @cssproperty --symbol-spacing - The spacing to use around symbols.\n */",
          documentation: "https://shoelace.style/components/rating",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlRating",
            module: "components/rating/rating.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/select/select.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlSelect",
          cssParts: [
            {
              description:
                "The form control that wraps the label, input, and help text.",
              name: "form-control",
            },
            {
              description: "The label's wrapper.",
              name: "form-control-label",
            },
            {
              description: "The select's wrapper.",
              name: "form-control-input",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
            {
              description:
                "The container the wraps the prefix, suffix, combobox, clear icon, and expand button.",
              name: "combobox",
            },
            {
              description: "The container that wraps the prefix slot.",
              name: "prefix",
            },
            {
              description: "The container that wraps the suffix slot.",
              name: "suffix",
            },
            {
              description:
                "The element that displays the selected option's label, an `<input>` element.",
              name: "display-input",
            },
            {
              description: "The listbox container where options are slotted.",
              name: "listbox",
            },
            {
              description:
                "The container that houses option tags when `multiselect` is used.",
              name: "tags",
            },
            {
              description:
                "The individual tags that represent each multiselect option.",
              name: "tag",
            },
            {
              description: "The tag's base part.",
              name: "tag__base",
            },
            {
              description: "The tag's content part.",
              name: "tag__content",
            },
            {
              description: "The tag's remove button.",
              name: "tag__remove-button",
            },
            {
              description: "The tag's remove button base part.",
              name: "tag__remove-button__base",
            },
            {
              description: "The clear button.",
              name: "clear-button",
            },
            {
              description: "The container that wraps the expand icon.",
              name: "expand-icon",
            },
          ],
          slots: [
            {
              description:
                "The listbox options. Must be `<sl-option>` elements. You can use `<sl-divider>` to group items visually.",
              name: "",
            },
            {
              description:
                "The input's label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Used to prepend a presentational icon or similar element to the combobox.",
              name: "prefix",
            },
            {
              description:
                "Used to append a presentational icon or similar element to the combobox.",
              name: "suffix",
            },
            {
              description: "An icon to use in lieu of the default clear icon.",
              name: "clear-icon",
            },
            {
              description:
                "The icon to show when the control is expanded and collapsed. Rotates on open and close.",
              name: "expand-icon",
            },
            {
              description:
                "Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default:
                "{ 'sl-icon': SlIcon, 'sl-popup': SlPopup, 'sl-tag': SlTag }",
            },
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default:
                "new FormControlController(this, { assumeInteractionOn: ['sl-blur', 'sl-input'] })",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text', 'label')",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "typeToSelectString",
              type: {
                text: "string",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "typeToSelectTimeout",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "closeWatcher",
              type: {
                text: "CloseWatcher | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "popup",
              type: {
                text: "SlPopup",
              },
            },
            {
              kind: "field",
              name: "combobox",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "displayInput",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "valueInput",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "listbox",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "displayLabel",
              type: {
                text: "string",
              },
              default: "''",
            },
            {
              kind: "field",
              name: "currentOption",
              type: {
                text: "SlOption",
              },
            },
            {
              kind: "field",
              name: "selectedOptions",
              type: {
                text: "SlOption[]",
              },
              default: "[]",
            },
            {
              kind: "field",
              name: "valueHasChanged",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the select, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "_value",
              type: {
                text: "string | string[]",
              },
              privacy: "private",
              default: "''",
            },
            {
              kind: "field",
              name: "value",
              description:
                "The current value of the select, submitted as a name/value pair with form data. When `multiple` is enabled, the\nvalue attribute will be a space-delimited list of values based on the options selected, and the value property will\nbe an array. **For this reason, values must not contain spaces.**",
            },
            {
              kind: "field",
              name: "defaultValue",
              type: {
                text: "string | string[]",
              },
              default: "''",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The select's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "placeholder",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Placeholder text to show as a hint when the select is empty.",
              attribute: "placeholder",
            },
            {
              kind: "field",
              name: "multiple",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Allows more than one option to be selected.",
              attribute: "multiple",
              reflects: true,
            },
            {
              kind: "field",
              name: "maxOptionsVisible",
              type: {
                text: "number",
              },
              default: "3",
              description:
                'The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to\nindicate the number of additional items that are selected. Set to 0 to remove the limit.',
              attribute: "max-options-visible",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the select control.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "clearable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Adds a clear button when the select is not empty.",
              attribute: "clearable",
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the select's open state.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the listbox from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",
              attribute: "hoist",
            },
            {
              kind: "field",
              name: "filled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a filled select.",
              attribute: "filled",
              reflects: true,
            },
            {
              kind: "field",
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style select with rounded edges.",
              attribute: "pill",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The select's label. If you need to display HTML, use the `label` slot instead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "placement",
              type: {
                text: "'top' | 'bottom'",
              },
              default: "'bottom'",
              description:
                "The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox\ninside of the viewport.",
              attribute: "placement",
              reflects: true,
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The select's help text. If you need to display HTML, use the `help-text` slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "The select's required attribute.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "getTag",
              type: {
                text: "(option: SlOption, index: number) => TemplateResult | string | HTMLElement",
              },
              description:
                "A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second\nis the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at\nthe specified value.",
              attribute: "getTag",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "addOpenListeners",
              privacy: "private",
            },
            {
              kind: "method",
              name: "removeOpenListeners",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentFocusIn",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentKeyDown",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentMouseDown",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleLabelClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleComboboxMouseDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleComboboxKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleClearClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleClearMouseDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleOptionClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleDefaultSlotChange",
              privacy: "public",
            },
            {
              kind: "method",
              name: "handleTagRemove",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "SlRemoveEvent",
                  },
                },
                {
                  name: "option",
                  type: {
                    text: "SlOption",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "getAllOptions",
              privacy: "private",
            },
            {
              kind: "method",
              name: "getFirstOption",
              privacy: "private",
            },
            {
              kind: "method",
              name: "setCurrentOption",
              privacy: "private",
              parameters: [
                {
                  name: "option",
                  type: {
                    text: "SlOption | null",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "setSelectedOptions",
              privacy: "private",
              parameters: [
                {
                  name: "option",
                  type: {
                    text: "SlOption | SlOption[]",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "toggleOptionSelection",
              privacy: "private",
              parameters: [
                {
                  name: "option",
                  type: {
                    text: "SlOption",
                  },
                },
                {
                  name: "force",
                  optional: true,
                  type: {
                    text: "boolean",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "selectionChanged",
              privacy: "private",
            },
            {
              kind: "field",
              name: "tags",
              privacy: "protected",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleValueChange",
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the listbox.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the listbox.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the control.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the control.",
            },
          ],
          events: [
            {
              description: "Emitted when the control's value changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the control's value is cleared.",
              name: "sl-clear",
              reactName: "onSlClear",
              eventName: "SlClearEvent",
            },
            {
              description: "Emitted when the control receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description: "Emitted when the control gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description: "Emitted when the control loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the select's menu opens.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
            },
            {
              description:
                "Emitted after the select's menu opens and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
            },
            {
              description: "Emitted when the select's menu closes.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
            },
            {
              description:
                "Emitted after the select's menu closes and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the select, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string | string[]",
              },
              default: "''",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
              fieldName: "defaultValue",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The select's size.",
              fieldName: "size",
            },
            {
              name: "placeholder",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Placeholder text to show as a hint when the select is empty.",
              fieldName: "placeholder",
            },
            {
              name: "multiple",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Allows more than one option to be selected.",
              fieldName: "multiple",
            },
            {
              name: "max-options-visible",
              type: {
                text: "number",
              },
              default: "3",
              description:
                'The maximum number of selected options to show when `multiple` is true. After the maximum, "+n" will be shown to\nindicate the number of additional items that are selected. Set to 0 to remove the limit.',
              fieldName: "maxOptionsVisible",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the select control.",
              fieldName: "disabled",
            },
            {
              name: "clearable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Adds a clear button when the select is not empty.",
              fieldName: "clearable",
            },
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the select is open. You can toggle this attribute to show and hide the menu, or you can\nuse the `show()` and `hide()` methods and this attribute will reflect the select's open state.",
              fieldName: "open",
            },
            {
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the listbox from being clipped when the component is placed inside a container with\n`overflow: auto|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all, scenarios.",
              fieldName: "hoist",
            },
            {
              name: "filled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a filled select.",
              fieldName: "filled",
            },
            {
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style select with rounded edges.",
              fieldName: "pill",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The select's label. If you need to display HTML, use the `label` slot instead.",
              fieldName: "label",
            },
            {
              name: "placement",
              type: {
                text: "'top' | 'bottom'",
              },
              default: "'bottom'",
              description:
                "The preferred placement of the select's menu. Note that the actual placement may vary as needed to keep the listbox\ninside of the viewport.",
              fieldName: "placement",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The select's help text. If you need to display HTML, use the `help-text` slot instead.",
              fieldName: "helpText",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "The select's required attribute.",
              fieldName: "required",
            },
            {
              name: "getTag",
              type: {
                text: "(option: SlOption, index: number) => TemplateResult | string | HTMLElement",
              },
              description:
                "A function that customizes the tags to be rendered when multiple=true. The first argument is the option, the second\nis the current tag's index.  The function should return either a Lit TemplateResult or a string containing trusted HTML of the symbol to render at\nthe specified value.",
              fieldName: "getTag",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Selects allow you to choose items from a menu of predefined options.",
          tagNameWithoutPrefix: "select",
          tagName: "sl-select",
          customElement: true,
          jsDoc:
            "/**\n * @summary Selects allow you to choose items from a menu of predefined options.\n * @documentation https://shoelace.style/components/select\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon\n * @dependency sl-popup\n * @dependency sl-tag\n *\n * @slot - The listbox options. Must be `<sl-option>` elements. You can use `<sl-divider>` to group items visually.\n * @slot label - The input's label. Alternatively, you can use the `label` attribute.\n * @slot prefix - Used to prepend a presentational icon or similar element to the combobox.\n * @slot suffix - Used to append a presentational icon or similar element to the combobox.\n * @slot clear-icon - An icon to use in lieu of the default clear icon.\n * @slot expand-icon - The icon to show when the control is expanded and collapsed. Rotates on open and close.\n * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-change - Emitted when the control's value changes.\n * @event sl-clear - Emitted when the control's value is cleared.\n * @event sl-input - Emitted when the control receives input.\n * @event sl-focus - Emitted when the control gains focus.\n * @event sl-blur - Emitted when the control loses focus.\n * @event sl-show - Emitted when the select's menu opens.\n * @event sl-after-show - Emitted after the select's menu opens and all animations are complete.\n * @event sl-hide - Emitted when the select's menu closes.\n * @event sl-after-hide - Emitted after the select's menu closes and all animations are complete.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart form-control - The form control that wraps the label, input, and help text.\n * @csspart form-control-label - The label's wrapper.\n * @csspart form-control-input - The select's wrapper.\n * @csspart form-control-help-text - The help text's wrapper.\n * @csspart combobox - The container the wraps the prefix, suffix, combobox, clear icon, and expand button.\n * @csspart prefix - The container that wraps the prefix slot.\n * @csspart suffix - The container that wraps the suffix slot.\n * @csspart display-input - The element that displays the selected option's label, an `<input>` element.\n * @csspart listbox - The listbox container where options are slotted.\n * @csspart tags - The container that houses option tags when `multiselect` is used.\n * @csspart tag - The individual tags that represent each multiselect option.\n * @csspart tag__base - The tag's base part.\n * @csspart tag__content - The tag's content part.\n * @csspart tag__remove-button - The tag's remove button.\n * @csspart tag__remove-button__base - The tag's remove button base part.\n * @csspart clear-button - The clear button.\n * @csspart expand-icon - The container that wraps the expand icon.\n */",
          documentation: "https://shoelace.style/components/select",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon", "sl-popup", "sl-tag"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlSelect",
            module: "components/select/select.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/skeleton/skeleton.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlSkeleton",
          cssProperties: [
            {
              description: "The skeleton's border radius.",
              name: "--border-radius",
            },
            {
              description: "The color of the skeleton.",
              name: "--color",
            },
            {
              description:
                "The sheen color when the skeleton is in its loading state.",
              name: "--sheen-color",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The skeleton's indicator which is responsible for its color and animation.",
              name: "indicator",
            },
          ],
          members: [
            {
              kind: "field",
              name: "effect",
              type: {
                text: "'pulse' | 'sheen' | 'none'",
              },
              default: "'none'",
              description: "Determines which effect the skeleton will use.",
              attribute: "effect",
            },
          ],
          attributes: [
            {
              name: "effect",
              type: {
                text: "'pulse' | 'sheen' | 'none'",
              },
              default: "'none'",
              description: "Determines which effect the skeleton will use.",
              fieldName: "effect",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Skeletons are used to provide a visual representation of where content will eventually be drawn.",
          tagNameWithoutPrefix: "skeleton",
          tagName: "sl-skeleton",
          customElement: true,
          jsDoc:
            "/**\n * @summary Skeletons are used to provide a visual representation of where content will eventually be drawn.\n * @documentation https://shoelace.style/components/skeleton\n * @status stable\n * @since 2.0\n *\n * @csspart base - The component's base wrapper.\n * @csspart indicator - The skeleton's indicator which is responsible for its color and animation.\n *\n * @cssproperty --border-radius - The skeleton's border radius.\n * @cssproperty --color - The color of the skeleton.\n * @cssproperty --sheen-color - The sheen color when the skeleton is in its loading state.\n */",
          documentation: "https://shoelace.style/components/skeleton",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlSkeleton",
            module: "components/skeleton/skeleton.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/split-panel/split-panel.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlSplitPanel",
          cssProperties: [
            {
              description: "The width of the visible divider.",
              name: "--divider-width",
              default: "4px",
            },
            {
              description:
                "The invisible region around the divider where dragging can occur. This is usually wider than the divider to facilitate easier dragging.",
              name: "--divider-hit-area",
              default: "12px",
            },
            {
              description: "The minimum allowed size of the primary panel.",
              name: "--min",
              default: "0",
            },
            {
              description: "The maximum allowed size of the primary panel.",
              name: "--max",
              default: "100%",
            },
          ],
          cssParts: [
            {
              description: "The start panel.",
              name: "start",
            },
            {
              description: "The end panel.",
              name: "end",
            },
            {
              description: "Targets both the start and end panels.",
              name: "panel",
            },
            {
              description:
                "The divider that separates the start and end panels.",
              name: "divider",
            },
          ],
          slots: [
            {
              description: "Content to place in the start panel.",
              name: "start",
            },
            {
              description: "Content to place in the end panel.",
              name: "end",
            },
            {
              description:
                "The divider. Useful for slotting in a custom icon that renders as a handle.",
              name: "divider",
            },
          ],
          members: [
            {
              kind: "field",
              name: "cachedPositionInPixels",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "isCollapsed",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "positionBeforeCollapsing",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "0",
            },
            {
              kind: "field",
              name: "resizeObserver",
              type: {
                text: "ResizeObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "divider",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "position",
              type: {
                text: "number",
              },
              default: "50",
              description:
                "The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the\ncontainer's initial size.",
              attribute: "position",
              reflects: true,
            },
            {
              kind: "field",
              name: "positionInPixels",
              type: {
                text: "number",
              },
              description:
                "The current position of the divider from the primary panel's edge in pixels.",
              attribute: "position-in-pixels",
            },
            {
              kind: "field",
              name: "vertical",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the split panel in a vertical orientation with the start and end panels stacked.",
              attribute: "vertical",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables resizing. Note that the position may still change as a result of resizing the host element.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "primary",
              type: {
                text: "'start' | 'end' | undefined",
              },
              description:
                "If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a\nprimary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the\nhost element is resized.",
              attribute: "primary",
            },
            {
              kind: "field",
              name: "snap",
              type: {
                text: "string | undefined",
              },
              description:
                'One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.\n`"100px 50%"`.',
              attribute: "snap",
            },
            {
              kind: "field",
              name: "snapThreshold",
              type: {
                text: "number",
              },
              default: "12",
              description:
                "How close the divider must be to a snap point until snapping occurs.",
              attribute: "snap-threshold",
            },
            {
              kind: "method",
              name: "detectSize",
              privacy: "private",
            },
            {
              kind: "method",
              name: "percentageToPixels",
              privacy: "private",
              parameters: [
                {
                  name: "value",
                  type: {
                    text: "number",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "pixelsToPercentage",
              privacy: "private",
              parameters: [
                {
                  name: "value",
                  type: {
                    text: "number",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleDrag",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "PointerEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleResize",
              privacy: "private",
              parameters: [
                {
                  name: "entries",
                  type: {
                    text: "ResizeObserverEntry[]",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handlePositionChange",
            },
            {
              kind: "method",
              name: "handlePositionInPixelsChange",
            },
            {
              kind: "method",
              name: "handleVerticalChange",
            },
          ],
          events: [
            {
              description: "Emitted when the divider's position changes.",
              name: "sl-reposition",
              reactName: "onSlReposition",
              eventName: "SlRepositionEvent",
            },
          ],
          attributes: [
            {
              name: "position",
              type: {
                text: "number",
              },
              default: "50",
              description:
                "The current position of the divider from the primary panel's edge as a percentage 0-100. Defaults to 50% of the\ncontainer's initial size.",
              fieldName: "position",
            },
            {
              name: "position-in-pixels",
              type: {
                text: "number",
              },
              description:
                "The current position of the divider from the primary panel's edge in pixels.",
              fieldName: "positionInPixels",
            },
            {
              name: "vertical",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Draws the split panel in a vertical orientation with the start and end panels stacked.",
              fieldName: "vertical",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables resizing. Note that the position may still change as a result of resizing the host element.",
              fieldName: "disabled",
            },
            {
              name: "primary",
              type: {
                text: "'start' | 'end' | undefined",
              },
              description:
                "If no primary panel is designated, both panels will resize proportionally when the host element is resized. If a\nprimary panel is designated, it will maintain its size and the other panel will grow or shrink as needed when the\nhost element is resized.",
              fieldName: "primary",
            },
            {
              name: "snap",
              type: {
                text: "string | undefined",
              },
              description:
                'One or more space-separated values at which the divider should snap. Values can be in pixels or percentages, e.g.\n`"100px 50%"`.',
              fieldName: "snap",
            },
            {
              name: "snap-threshold",
              type: {
                text: "number",
              },
              default: "12",
              description:
                "How close the divider must be to a snap point until snapping occurs.",
              fieldName: "snapThreshold",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Split panels display two adjacent panels, allowing the user to reposition them.",
          tagNameWithoutPrefix: "split-panel",
          tagName: "sl-split-panel",
          customElement: true,
          jsDoc:
            "/**\n * @summary Split panels display two adjacent panels, allowing the user to reposition them.\n * @documentation https://shoelace.style/components/split-panel\n * @status stable\n * @since 2.0\n *\n * @event sl-reposition - Emitted when the divider's position changes.\n *\n * @slot start - Content to place in the start panel.\n * @slot end - Content to place in the end panel.\n * @slot divider - The divider. Useful for slotting in a custom icon that renders as a handle.\n *\n * @csspart start - The start panel.\n * @csspart end - The end panel.\n * @csspart panel - Targets both the start and end panels.\n * @csspart divider - The divider that separates the start and end panels.\n *\n * @cssproperty [--divider-width=4px] - The width of the visible divider.\n * @cssproperty [--divider-hit-area=12px] - The invisible region around the divider where dragging can occur. This is\n *  usually wider than the divider to facilitate easier dragging.\n * @cssproperty [--min=0] - The minimum allowed size of the primary panel.\n * @cssproperty [--max=100%] - The maximum allowed size of the primary panel.\n */",
          documentation: "https://shoelace.style/components/split-panel",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlSplitPanel",
            module: "components/split-panel/split-panel.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/spinner/spinner.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlSpinner",
          cssProperties: [
            {
              description: "The width of the track.",
              name: "--track-width",
            },
            {
              description: "The color of the track.",
              name: "--track-color",
            },
            {
              description: "The color of the spinner's indicator.",
              name: "--indicator-color",
            },
            {
              description:
                "The time it takes for the spinner to complete one animation cycle.",
              name: "--speed",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          members: [
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Spinners are used to show the progress of an indeterminate operation.",
          tagNameWithoutPrefix: "spinner",
          tagName: "sl-spinner",
          customElement: true,
          jsDoc:
            "/**\n * @summary Spinners are used to show the progress of an indeterminate operation.\n * @documentation https://shoelace.style/components/spinner\n * @status stable\n * @since 2.0\n *\n * @csspart base - The component's base wrapper.\n *\n * @cssproperty --track-width - The width of the track.\n * @cssproperty --track-color - The color of the track.\n * @cssproperty --indicator-color - The color of the spinner's indicator.\n * @cssproperty --speed - The time it takes for the spinner to complete one animation cycle.\n */",
          documentation: "https://shoelace.style/components/spinner",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlSpinner",
            module: "components/spinner/spinner.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/switch/switch.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlSwitch",
          cssProperties: [
            {
              description: "The width of the switch.",
              name: "--width",
            },
            {
              description: "The height of the switch.",
              name: "--height",
            },
            {
              description: "The size of the thumb.",
              name: "--thumb-size",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The control that houses the switch's thumb.",
              name: "control",
            },
            {
              description: "The switch's thumb.",
              name: "thumb",
            },
            {
              description: "The switch's label.",
              name: "label",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
          ],
          slots: [
            {
              description: "The switch's label.",
              name: "",
            },
            {
              description:
                "Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default:
                "new FormControlController(this, { value: (control: SlSwitch) => (control.checked ? control.value || 'on' : undefined), defaultValue: (control: SlSwitch) => control.defaultChecked, setValue: (control: SlSwitch, checked: boolean) => (control.checked = checked) })",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text')",
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "HTMLInputElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              attribute: "title",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the switch, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The current value of the switch, submitted as a name/value pair with form data.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The switch's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the switch.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the switch in a checked state.",
              attribute: "checked",
              reflects: true,
            },
            {
              kind: "field",
              name: "defaultChecked",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the switch a required field.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The switch's help text. If you need to display HTML, use the `help-text` slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInput",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleCheckedChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "click",
              description: "Simulates a click on the switch.",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the switch.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the switch.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
          ],
          events: [
            {
              description: "Emitted when the control loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description: "Emitted when the control's checked state changes.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the control receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description: "Emitted when the control gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              fieldName: "title",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the switch, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              description:
                "The current value of the switch, submitted as a name/value pair with form data.",
              fieldName: "value",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The switch's size.",
              fieldName: "size",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the switch.",
              fieldName: "disabled",
            },
            {
              name: "checked",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the switch in a checked state.",
              fieldName: "checked",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the switch a required field.",
              fieldName: "required",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The switch's help text. If you need to display HTML, use the `help-text` slot instead.",
              fieldName: "helpText",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary: "Switches allow the user to toggle an option on or off.",
          tagNameWithoutPrefix: "switch",
          tagName: "sl-switch",
          customElement: true,
          jsDoc:
            "/**\n * @summary Switches allow the user to toggle an option on or off.\n * @documentation https://shoelace.style/components/switch\n * @status stable\n * @since 2.0\n *\n * @slot - The switch's label.\n * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-blur - Emitted when the control loses focus.\n * @event sl-change - Emitted when the control's checked state changes.\n * @event sl-input - Emitted when the control receives input.\n * @event sl-focus - Emitted when the control gains focus.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart base - The component's base wrapper.\n * @csspart control - The control that houses the switch's thumb.\n * @csspart thumb - The switch's thumb.\n * @csspart label - The switch's label.\n * @csspart form-control-help-text - The help text's wrapper.\n *\n * @cssproperty --width - The width of the switch.\n * @cssproperty --height - The height of the switch.\n * @cssproperty --thumb-size - The size of the thumb.\n */",
          documentation: "https://shoelace.style/components/switch",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlSwitch",
            module: "components/switch/switch.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tab/tab.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTab",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The close button, an `<sl-icon-button>`.",
              name: "close-button",
            },
            {
              description: "The close button's exported `base` part.",
              name: "close-button__base",
            },
          ],
          slots: [
            {
              description: "The tab's label.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon-button': SlIconButton }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "attrId",
              type: {
                text: "number",
              },
              privacy: "private",
              readonly: true,
              default: "++id",
            },
            {
              kind: "field",
              name: "componentId",
              privacy: "private",
              readonly: true,
              default: "`sl-tab-${this.attrId}`",
            },
            {
              kind: "field",
              name: "tab",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "panel",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the tab panel this tab is associated with. The panel must be located in the same tab group.",
              attribute: "panel",
              reflects: true,
            },
            {
              kind: "field",
              name: "active",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the tab in an active state.",
              attribute: "active",
              reflects: true,
            },
            {
              kind: "field",
              name: "closable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the tab closable and shows a close button.",
              attribute: "closable",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the tab and prevents selection.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleCloseClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleActiveChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
          ],
          events: [
            {
              description:
                "Emitted when the tab is closable and the close button is activated.",
              name: "sl-close",
              reactName: "onSlClose",
              eventName: "SlCloseEvent",
            },
          ],
          attributes: [
            {
              name: "panel",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the tab panel this tab is associated with. The panel must be located in the same tab group.",
              fieldName: "panel",
            },
            {
              name: "active",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the tab in an active state.",
              fieldName: "active",
            },
            {
              name: "closable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the tab closable and shows a close button.",
              fieldName: "closable",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the tab and prevents selection.",
              fieldName: "disabled",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).",
          tagNameWithoutPrefix: "tab",
          tagName: "sl-tab",
          customElement: true,
          jsDoc:
            "/**\n * @summary Tabs are used inside [tab groups](/components/tab-group) to represent and activate [tab panels](/components/tab-panel).\n * @documentation https://shoelace.style/components/tab\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon-button\n *\n * @slot - The tab's label.\n *\n * @event sl-close - Emitted when the tab is closable and the close button is activated.\n *\n * @csspart base - The component's base wrapper.\n * @csspart close-button - The close button, an `<sl-icon-button>`.\n * @csspart close-button__base - The close button's exported `base` part.\n */",
          documentation: "https://shoelace.style/components/tab",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon-button"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTab",
            module: "components/tab/tab.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tag/tag.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTag",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The tag's content.",
              name: "content",
            },
            {
              description: "The tag's remove button, an `<sl-icon-button>`.",
              name: "remove-button",
            },
            {
              description: "The remove button's exported `base` part.",
              name: "remove-button__base",
            },
          ],
          slots: [
            {
              description: "The tag's content.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-icon-button': SlIconButton }",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "variant",
              type: {
                text: "'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'",
              },
              default: "'neutral'",
              description: "The tag's theme variant.",
              attribute: "variant",
              reflects: true,
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The tag's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style tag with rounded edges.",
              attribute: "pill",
              reflects: true,
            },
            {
              kind: "field",
              name: "removable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the tag removable and shows a remove button.",
              attribute: "removable",
            },
            {
              kind: "method",
              name: "handleRemoveClick",
              privacy: "private",
            },
          ],
          events: [
            {
              description: "Emitted when the remove button is activated.",
              name: "sl-remove",
              reactName: "onSlRemove",
              eventName: "SlRemoveEvent",
            },
          ],
          attributes: [
            {
              name: "variant",
              type: {
                text: "'primary' | 'success' | 'neutral' | 'warning' | 'danger' | 'text'",
              },
              default: "'neutral'",
              description: "The tag's theme variant.",
              fieldName: "variant",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The tag's size.",
              fieldName: "size",
            },
            {
              name: "pill",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a pill-style tag with rounded edges.",
              fieldName: "pill",
            },
            {
              name: "removable",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the tag removable and shows a remove button.",
              fieldName: "removable",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Tags are used as labels to organize things or to indicate a selection.",
          tagNameWithoutPrefix: "tag",
          tagName: "sl-tag",
          customElement: true,
          jsDoc:
            "/**\n * @summary Tags are used as labels to organize things or to indicate a selection.\n * @documentation https://shoelace.style/components/tag\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon-button\n *\n * @slot - The tag's content.\n *\n * @event sl-remove - Emitted when the remove button is activated.\n *\n * @csspart base - The component's base wrapper.\n * @csspart content - The tag's content.\n * @csspart remove-button - The tag's remove button, an `<sl-icon-button>`.\n * @csspart remove-button__base - The remove button's exported `base` part.\n */",
          documentation: "https://shoelace.style/components/tag",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon-button"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTag",
            module: "components/tag/tag.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tab-panel/tab-panel.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTabPanel",
          cssProperties: [
            {
              description: "The tab panel's padding.",
              name: "--padding",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          slots: [
            {
              description: "The tab panel's content.",
              name: "",
            },
          ],
          members: [
            {
              kind: "field",
              name: "attrId",
              type: {
                text: "number",
              },
              privacy: "private",
              readonly: true,
              default: "++id",
            },
            {
              kind: "field",
              name: "componentId",
              privacy: "private",
              readonly: true,
              default: "`sl-tab-panel-${this.attrId}`",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description: "The tab panel's name.",
              attribute: "name",
              reflects: true,
            },
            {
              kind: "field",
              name: "active",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "When true, the tab panel will be shown.",
              attribute: "active",
              reflects: true,
            },
            {
              kind: "method",
              name: "handleActiveChange",
            },
          ],
          attributes: [
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description: "The tab panel's name.",
              fieldName: "name",
            },
            {
              name: "active",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "When true, the tab panel will be shown.",
              fieldName: "active",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.",
          tagNameWithoutPrefix: "tab-panel",
          tagName: "sl-tab-panel",
          customElement: true,
          jsDoc:
            "/**\n * @summary Tab panels are used inside [tab groups](/components/tab-group) to display tabbed content.\n * @documentation https://shoelace.style/components/tab-panel\n * @status stable\n * @since 2.0\n *\n * @slot - The tab panel's content.\n *\n * @csspart base - The component's base wrapper.\n *\n * @cssproperty --padding - The tab panel's padding.\n */",
          documentation: "https://shoelace.style/components/tab-panel",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTabPanel",
            module: "components/tab-panel/tab-panel.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tab-group/tab-group.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTabGroup",
          cssProperties: [
            {
              description: "The color of the active tab indicator.",
              name: "--indicator-color",
            },
            {
              description:
                "The color of the indicator's track (the line that separates tabs from panels).",
              name: "--track-color",
            },
            {
              description:
                "The width of the indicator's track (the line that separates tabs from panels).",
              name: "--track-width",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The tab group's navigation container where tabs are slotted in.",
              name: "nav",
            },
            {
              description: "The container that wraps the tabs.",
              name: "tabs",
            },
            {
              description:
                "The line that highlights the currently selected tab.",
              name: "active-tab-indicator",
            },
            {
              description:
                "The tab group's body where tab panels are slotted in.",
              name: "body",
            },
            {
              description:
                "The previous/next scroll buttons that show when tabs are scrollable, an `<sl-icon-button>`.",
              name: "scroll-button",
            },
            {
              description: "The starting scroll button.",
              name: "scroll-button--start",
            },
            {
              description: "The ending scroll button.",
              name: "scroll-button--end",
            },
            {
              description: "The scroll button's exported `base` part.",
              name: "scroll-button__base",
            },
          ],
          slots: [
            {
              description:
                "Used for grouping tab panels in the tab group. Must be `<sl-tab-panel>` elements.",
              name: "",
            },
            {
              description:
                "Used for grouping tabs in the tab group. Must be `<sl-tab>` elements.",
              name: "nav",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default:
                "{ 'sl-icon-button': SlIconButton, 'sl-resize-observer': SlResizeObserver }",
            },
            {
              kind: "field",
              name: "activeTab",
              type: {
                text: "SlTab | undefined",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "mutationObserver",
              type: {
                text: "MutationObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "resizeObserver",
              type: {
                text: "ResizeObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "tabs",
              type: {
                text: "SlTab[]",
              },
              privacy: "private",
              default: "[]",
            },
            {
              kind: "field",
              name: "focusableTabs",
              type: {
                text: "SlTab[]",
              },
              privacy: "private",
              default: "[]",
            },
            {
              kind: "field",
              name: "panels",
              type: {
                text: "SlTabPanel[]",
              },
              privacy: "private",
              default: "[]",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "tabGroup",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "body",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "nav",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "indicator",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "hasScrollControls",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "shouldHideScrollStartButton",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "shouldHideScrollEndButton",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "placement",
              type: {
                text: "'top' | 'bottom' | 'start' | 'end'",
              },
              default: "'top'",
              description: "The placement of the tabs.",
              attribute: "placement",
            },
            {
              kind: "field",
              name: "activation",
              type: {
                text: "'auto' | 'manual'",
              },
              default: "'auto'",
              description:
                "When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to\nmanual, the tab will receive focus but will not show until the user presses spacebar or enter.",
              attribute: "activation",
            },
            {
              kind: "field",
              name: "noScrollControls",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables the scroll arrows that appear when tabs overflow.",
              attribute: "no-scroll-controls",
            },
            {
              kind: "field",
              name: "fixedScrollControls",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Prevent scroll buttons from being hidden when inactive.",
              attribute: "fixed-scroll-controls",
            },
            {
              kind: "method",
              name: "getAllTabs",
              privacy: "private",
            },
            {
              kind: "method",
              name: "getAllPanels",
              privacy: "private",
            },
            {
              kind: "method",
              name: "getActiveTab",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleScrollToStart",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleScrollToEnd",
              privacy: "private",
            },
            {
              kind: "method",
              name: "setActiveTab",
              privacy: "private",
              parameters: [
                {
                  name: "tab",
                  type: {
                    text: "SlTab",
                  },
                },
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "{ emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "setAriaLabels",
              privacy: "private",
            },
            {
              kind: "method",
              name: "repositionIndicator",
              privacy: "private",
            },
            {
              kind: "method",
              name: "syncTabsAndPanels",
              privacy: "private",
            },
            {
              kind: "method",
              name: "findNextFocusableTab",
              privacy: "private",
              parameters: [
                {
                  name: "currentIndex",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "direction",
                  type: {
                    text: "'forward' | 'backward'",
                  },
                },
              ],
            },
            {
              kind: "field",
              name: "scrollOffset",
              type: {
                text: "number",
              },
              privacy: "private",
              default: "1",
              description:
                "The reality of the browser means that we can't expect the scroll position to be exactly what we want it to be, so\nwe add one pixel of wiggle room to our calculations.",
            },
            {
              kind: "method",
              name: "updateScrollButtons",
              privacy: "private",
            },
            {
              kind: "method",
              name: "isScrolledToEnd",
              privacy: "private",
            },
            {
              kind: "method",
              name: "scrollFromStart",
              privacy: "private",
            },
            {
              kind: "method",
              name: "updateScrollControls",
            },
            {
              kind: "method",
              name: "syncIndicator",
            },
            {
              kind: "method",
              name: "show",
              parameters: [
                {
                  name: "panel",
                  type: {
                    text: "string",
                  },
                },
              ],
              description: "Shows the specified tab panel.",
            },
          ],
          events: [
            {
              type: {
                text: "{ name: String }",
              },
              description: "Emitted when a tab is shown.",
              name: "sl-tab-show",
              reactName: "onSlTabShow",
              eventName: "SlTabShowEvent",
            },
            {
              type: {
                text: "{ name: String }",
              },
              description: "Emitted when a tab is hidden.",
              name: "sl-tab-hide",
              reactName: "onSlTabHide",
              eventName: "SlTabHideEvent",
            },
          ],
          attributes: [
            {
              name: "placement",
              type: {
                text: "'top' | 'bottom' | 'start' | 'end'",
              },
              default: "'top'",
              description: "The placement of the tabs.",
              fieldName: "placement",
            },
            {
              name: "activation",
              type: {
                text: "'auto' | 'manual'",
              },
              default: "'auto'",
              description:
                "When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to\nmanual, the tab will receive focus but will not show until the user presses spacebar or enter.",
              fieldName: "activation",
            },
            {
              name: "no-scroll-controls",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables the scroll arrows that appear when tabs overflow.",
              fieldName: "noScrollControls",
            },
            {
              name: "fixed-scroll-controls",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Prevent scroll buttons from being hidden when inactive.",
              fieldName: "fixedScrollControls",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Tab groups organize content into a container that shows one section at a time.",
          tagNameWithoutPrefix: "tab-group",
          tagName: "sl-tab-group",
          customElement: true,
          jsDoc:
            "/**\n * @summary Tab groups organize content into a container that shows one section at a time.\n * @documentation https://shoelace.style/components/tab-group\n * @status stable\n * @since 2.0\n *\n * @dependency sl-icon-button\n *\n * @slot - Used for grouping tab panels in the tab group. Must be `<sl-tab-panel>` elements.\n * @slot nav - Used for grouping tabs in the tab group. Must be `<sl-tab>` elements.\n *\n * @event {{ name: String }} sl-tab-show - Emitted when a tab is shown.\n * @event {{ name: String }} sl-tab-hide - Emitted when a tab is hidden.\n *\n * @csspart base - The component's base wrapper.\n * @csspart nav - The tab group's navigation container where tabs are slotted in.\n * @csspart tabs - The container that wraps the tabs.\n * @csspart active-tab-indicator - The line that highlights the currently selected tab.\n * @csspart body - The tab group's body where tab panels are slotted in.\n * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<sl-icon-button>`.\n * @csspart scroll-button--start - The starting scroll button.\n * @csspart scroll-button--end - The ending scroll button.\n * @csspart scroll-button__base - The scroll button's exported `base` part.\n *\n * @cssproperty --indicator-color - The color of the active tab indicator.\n * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).\n * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).\n */",
          documentation: "https://shoelace.style/components/tab-group",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-icon-button"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTabGroup",
            module: "components/tab-group/tab-group.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/textarea/textarea.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTextarea",
          cssParts: [
            {
              description:
                "The form control that wraps the label, input, and help text.",
              name: "form-control",
            },
            {
              description: "The label's wrapper.",
              name: "form-control-label",
            },
            {
              description: "The input's wrapper.",
              name: "form-control-input",
            },
            {
              description: "The help text's wrapper.",
              name: "form-control-help-text",
            },
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description: "The internal `<textarea>` control.",
              name: "textarea",
            },
          ],
          slots: [
            {
              description:
                "The textarea's label. Alternatively, you can use the `label` attribute.",
              name: "label",
            },
            {
              description:
                "Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.",
              name: "help-text",
            },
          ],
          members: [
            {
              kind: "field",
              name: "formControlController",
              privacy: "private",
              readonly: true,
              default:
                "new FormControlController(this, { assumeInteractionOn: ['sl-blur', 'sl-input'] })",
            },
            {
              kind: "field",
              name: "hasSlotController",
              privacy: "private",
              readonly: true,
              default: "new HasSlotController(this, 'help-text', 'label')",
            },
            {
              kind: "field",
              name: "resizeObserver",
              type: {
                text: "ResizeObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "input",
              type: {
                text: "HTMLTextAreaElement",
              },
            },
            {
              kind: "field",
              name: "sizeAdjuster",
              type: {
                text: "HTMLTextAreaElement",
              },
            },
            {
              kind: "field",
              name: "hasFocus",
              type: {
                text: "boolean",
              },
              privacy: "private",
              default: "false",
            },
            {
              kind: "field",
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              attribute: "title",
            },
            {
              kind: "field",
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the textarea, submitted as a name/value pair with form data.",
              attribute: "name",
            },
            {
              kind: "field",
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the textarea, submitted as a name/value pair with form data.",
              attribute: "value",
            },
            {
              kind: "field",
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The textarea's size.",
              attribute: "size",
              reflects: true,
            },
            {
              kind: "field",
              name: "filled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a filled textarea.",
              attribute: "filled",
              reflects: true,
            },
            {
              kind: "field",
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The textarea's label. If you need to display HTML, use the `label` slot instead.",
              attribute: "label",
            },
            {
              kind: "field",
              name: "helpText",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The textarea's help text. If you need to display HTML, use the `help-text` slot instead.",
              attribute: "help-text",
            },
            {
              kind: "field",
              name: "placeholder",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Placeholder text to show as a hint when the input is empty.",
              attribute: "placeholder",
            },
            {
              kind: "field",
              name: "rows",
              type: {
                text: "number",
              },
              default: "4",
              description: "The number of rows to display by default.",
              attribute: "rows",
            },
            {
              kind: "field",
              name: "resize",
              type: {
                text: "'none' | 'vertical' | 'auto'",
              },
              default: "'vertical'",
              description: "Controls how the textarea can be resized.",
              attribute: "resize",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the textarea.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "readonly",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the textarea readonly.",
              attribute: "readonly",
              reflects: true,
            },
            {
              kind: "field",
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              attribute: "form",
              reflects: true,
            },
            {
              kind: "field",
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the textarea a required field.",
              attribute: "required",
              reflects: true,
            },
            {
              kind: "field",
              name: "minlength",
              type: {
                text: "number",
              },
              description:
                "The minimum length of input that will be considered valid.",
              attribute: "minlength",
            },
            {
              kind: "field",
              name: "maxlength",
              type: {
                text: "number",
              },
              description:
                "The maximum length of input that will be considered valid.",
              attribute: "maxlength",
            },
            {
              kind: "field",
              name: "autocapitalize",
              type: {
                text: "'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'",
              },
              description:
                "Controls whether and how text input is automatically capitalized as it is entered by the user.",
              attribute: "autocapitalize",
            },
            {
              kind: "field",
              name: "autocorrect",
              type: {
                text: "string",
              },
              description:
                "Indicates whether the browser's autocorrect feature is on or off.",
              attribute: "autocorrect",
            },
            {
              kind: "field",
              name: "autocomplete",
              type: {
                text: "string",
              },
              description:
                "Specifies what permission the browser has to provide assistance in filling out form field values. Refer to\n[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.",
              attribute: "autocomplete",
            },
            {
              kind: "field",
              name: "autofocus",
              type: {
                text: "boolean",
              },
              description:
                "Indicates that the input should receive focus on page load.",
              attribute: "autofocus",
            },
            {
              kind: "field",
              name: "enterkeyhint",
              type: {
                text: "'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",
              },
              description:
                "Used to customize the label or icon of the Enter key on virtual keyboards.",
              attribute: "enterkeyhint",
            },
            {
              kind: "field",
              name: "spellcheck",
              type: {
                text: "boolean",
              },
              default: "true",
              description: "Enables spell checking on the textarea.",
              attribute: "spellcheck",
            },
            {
              kind: "field",
              name: "inputmode",
              type: {
                text: "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",
              },
              description:
                "Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual\nkeyboard on supportive devices.",
              attribute: "inputmode",
            },
            {
              kind: "field",
              name: "defaultValue",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The default value of the form control. Primarily used for resetting the form control.",
            },
            {
              kind: "field",
              name: "validity",
              description: "Gets the validity state object",
              readonly: true,
            },
            {
              kind: "field",
              name: "validationMessage",
              description: "Gets the validation message",
              readonly: true,
            },
            {
              kind: "method",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInput",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleInvalid",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "setTextareaHeight",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleRowsChange",
            },
            {
              kind: "method",
              name: "handleValueChange",
            },
            {
              kind: "method",
              name: "focus",
              parameters: [
                {
                  name: "options",
                  optional: true,
                  type: {
                    text: "FocusOptions",
                  },
                },
              ],
              description: "Sets focus on the textarea.",
            },
            {
              kind: "method",
              name: "blur",
              description: "Removes focus from the textarea.",
            },
            {
              kind: "method",
              name: "select",
              description: "Selects all the text in the textarea.",
            },
            {
              kind: "method",
              name: "scrollPosition",
              return: {
                type: {
                  text: "{ top: number; left: number } | undefined",
                },
              },
              parameters: [
                {
                  name: "position",
                  optional: true,
                  type: {
                    text: "{ top?: number; left?: number }",
                  },
                },
              ],
              description: "Gets or sets the textarea's scroll position.",
            },
            {
              kind: "method",
              name: "setSelectionRange",
              parameters: [
                {
                  name: "selectionStart",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "selectionEnd",
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "selectionDirection",
                  default: "'none'",
                  type: {
                    text: "'forward' | 'backward' | 'none'",
                  },
                },
              ],
              description:
                "Sets the start and end positions of the text selection (0-based).",
            },
            {
              kind: "method",
              name: "setRangeText",
              parameters: [
                {
                  name: "replacement",
                  type: {
                    text: "string",
                  },
                },
                {
                  name: "start",
                  optional: true,
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "end",
                  optional: true,
                  type: {
                    text: "number",
                  },
                },
                {
                  name: "selectMode",
                  default: "'preserve'",
                  type: {
                    text: "'select' | 'start' | 'end' | 'preserve'",
                  },
                },
              ],
              description: "Replaces a range of text with a new string.",
            },
            {
              kind: "method",
              name: "checkValidity",
              description:
                "Checks for validity but does not show a validation message. Returns `true` when valid and `false` when invalid.",
            },
            {
              kind: "method",
              name: "getForm",
              return: {
                type: {
                  text: "HTMLFormElement | null",
                },
              },
              description: "Gets the associated form, if one exists.",
            },
            {
              kind: "method",
              name: "reportValidity",
              description:
                "Checks for validity and shows the browser's validation message if the control is invalid.",
            },
            {
              kind: "method",
              name: "setCustomValidity",
              parameters: [
                {
                  name: "message",
                  type: {
                    text: "string",
                  },
                },
              ],
              description:
                "Sets a custom validation message. Pass an empty string to restore validity.",
            },
          ],
          events: [
            {
              description: "Emitted when the control loses focus.",
              name: "sl-blur",
              reactName: "onSlBlur",
              eventName: "SlBlurEvent",
            },
            {
              description:
                "Emitted when an alteration to the control's value is committed by the user.",
              name: "sl-change",
              reactName: "onSlChange",
              eventName: "SlChangeEvent",
            },
            {
              description: "Emitted when the control gains focus.",
              name: "sl-focus",
              reactName: "onSlFocus",
              eventName: "SlFocusEvent",
            },
            {
              description: "Emitted when the control receives input.",
              name: "sl-input",
              reactName: "onSlInput",
              eventName: "SlInputEvent",
            },
            {
              description:
                "Emitted when the form control has been checked for validity and its constraints aren't satisfied.",
              name: "sl-invalid",
              reactName: "onSlInvalid",
              eventName: "SlInvalidEvent",
            },
          ],
          attributes: [
            {
              name: "title",
              type: {
                text: "string",
              },
              default: "''",
              fieldName: "title",
            },
            {
              name: "name",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The name of the textarea, submitted as a name/value pair with form data.",
              fieldName: "name",
            },
            {
              name: "value",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The current value of the textarea, submitted as a name/value pair with form data.",
              fieldName: "value",
            },
            {
              name: "size",
              type: {
                text: "'small' | 'medium' | 'large'",
              },
              default: "'medium'",
              description: "The textarea's size.",
              fieldName: "size",
            },
            {
              name: "filled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws a filled textarea.",
              fieldName: "filled",
            },
            {
              name: "label",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The textarea's label. If you need to display HTML, use the `label` slot instead.",
              fieldName: "label",
            },
            {
              name: "help-text",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The textarea's help text. If you need to display HTML, use the `help-text` slot instead.",
              fieldName: "helpText",
            },
            {
              name: "placeholder",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "Placeholder text to show as a hint when the input is empty.",
              fieldName: "placeholder",
            },
            {
              name: "rows",
              type: {
                text: "number",
              },
              default: "4",
              description: "The number of rows to display by default.",
              fieldName: "rows",
            },
            {
              name: "resize",
              type: {
                text: "'none' | 'vertical' | 'auto'",
              },
              default: "'vertical'",
              description: "Controls how the textarea can be resized.",
              fieldName: "resize",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the textarea.",
              fieldName: "disabled",
            },
            {
              name: "readonly",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the textarea readonly.",
              fieldName: "readonly",
            },
            {
              name: "form",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you\nto place the form control outside of a form and associate it with the form that has this `id`. The form must be in\nthe same document or shadow root for this to work.",
              fieldName: "form",
            },
            {
              name: "required",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Makes the textarea a required field.",
              fieldName: "required",
            },
            {
              name: "minlength",
              type: {
                text: "number",
              },
              description:
                "The minimum length of input that will be considered valid.",
              fieldName: "minlength",
            },
            {
              name: "maxlength",
              type: {
                text: "number",
              },
              description:
                "The maximum length of input that will be considered valid.",
              fieldName: "maxlength",
            },
            {
              name: "autocapitalize",
              type: {
                text: "'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'",
              },
              description:
                "Controls whether and how text input is automatically capitalized as it is entered by the user.",
              fieldName: "autocapitalize",
            },
            {
              name: "autocorrect",
              type: {
                text: "string",
              },
              description:
                "Indicates whether the browser's autocorrect feature is on or off.",
              fieldName: "autocorrect",
            },
            {
              name: "autocomplete",
              type: {
                text: "string",
              },
              description:
                "Specifies what permission the browser has to provide assistance in filling out form field values. Refer to\n[this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.",
              fieldName: "autocomplete",
            },
            {
              name: "autofocus",
              type: {
                text: "boolean",
              },
              description:
                "Indicates that the input should receive focus on page load.",
              fieldName: "autofocus",
            },
            {
              name: "enterkeyhint",
              type: {
                text: "'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",
              },
              description:
                "Used to customize the label or icon of the Enter key on virtual keyboards.",
              fieldName: "enterkeyhint",
            },
            {
              name: "spellcheck",
              type: {
                text: "boolean",
              },
              default: "true",
              description: "Enables spell checking on the textarea.",
              fieldName: "spellcheck",
            },
            {
              name: "inputmode",
              type: {
                text: "'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url'",
              },
              description:
                "Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual\nkeyboard on supportive devices.",
              fieldName: "inputmode",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Textareas collect data from the user and allow multiple lines of text.",
          tagNameWithoutPrefix: "textarea",
          tagName: "sl-textarea",
          customElement: true,
          jsDoc:
            "/**\n * @summary Textareas collect data from the user and allow multiple lines of text.\n * @documentation https://shoelace.style/components/textarea\n * @status stable\n * @since 2.0\n *\n * @slot label - The textarea's label. Alternatively, you can use the `label` attribute.\n * @slot help-text - Text that describes how to use the input. Alternatively, you can use the `help-text` attribute.\n *\n * @event sl-blur - Emitted when the control loses focus.\n * @event sl-change - Emitted when an alteration to the control's value is committed by the user.\n * @event sl-focus - Emitted when the control gains focus.\n * @event sl-input - Emitted when the control receives input.\n * @event sl-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.\n *\n * @csspart form-control - The form control that wraps the label, input, and help text.\n * @csspart form-control-label - The label's wrapper.\n * @csspart form-control-input - The input's wrapper.\n * @csspart form-control-help-text - The help text's wrapper.\n * @csspart base - The component's base wrapper.\n * @csspart textarea - The internal `<textarea>` control.\n */",
          documentation: "https://shoelace.style/components/textarea",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTextarea",
            module: "components/textarea/textarea.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tooltip/tooltip.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTooltip",
          cssProperties: [
            {
              description:
                "The maximum width of the tooltip before its content will wrap.",
              name: "--max-width",
            },
            {
              description:
                "The amount of time to wait before hiding the tooltip when hovering.",
              name: "--hide-delay",
            },
            {
              description:
                "The amount of time to wait before showing the tooltip when hovering.",
              name: "--show-delay",
            },
          ],
          cssParts: [
            {
              description:
                "The component's base wrapper, an `<sl-popup>` element.",
              name: "base",
            },
            {
              description:
                "The popup's exported `popup` part. Use this to target the tooltip's popup container.",
              name: "base__popup",
            },
            {
              description:
                "The popup's exported `arrow` part. Use this to target the tooltip's arrow.",
              name: "base__arrow",
            },
            {
              description: "The tooltip's body where its content is rendered.",
              name: "body",
            },
          ],
          slots: [
            {
              description:
                "The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.",
              name: "",
            },
            {
              description:
                "The content to render in the tooltip. Alternatively, you can use the `content` attribute.",
              name: "content",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default: "{ 'sl-popup': SlPopup }",
            },
            {
              kind: "field",
              name: "hoverTimeout",
              type: {
                text: "number",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "closeWatcher",
              type: {
                text: "CloseWatcher | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "body",
              type: {
                text: "HTMLElement",
              },
            },
            {
              kind: "field",
              name: "popup",
              type: {
                text: "SlPopup",
              },
            },
            {
              kind: "field",
              name: "content",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The tooltip's content. If you need to display HTML, use the `content` slot instead.",
              attribute: "content",
            },
            {
              kind: "field",
              name: "placement",
              type: {
                text: "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
              },
              default: "'top'",
              description:
                "The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip\ninside of the viewport.",
              attribute: "placement",
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables the tooltip so it won't show when triggered.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "distance",
              type: {
                text: "number",
              },
              default: "8",
              description:
                "The distance in pixels from which to offset the tooltip away from its target.",
              attribute: "distance",
            },
            {
              kind: "field",
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",
              attribute: "open",
              reflects: true,
            },
            {
              kind: "field",
              name: "skidding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the tooltip along its target.",
              attribute: "skidding",
            },
            {
              kind: "field",
              name: "trigger",
              type: {
                text: "string",
              },
              default: "'hover focus'",
              description:
                "Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple\noptions can be passed by separating them with a space. When manual is used, the tooltip must be activated\nprogrammatically.",
              attribute: "trigger",
            },
            {
              kind: "field",
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",
              attribute: "hoist",
            },
            {
              kind: "field",
              name: "handleBlur",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleClick",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleFocus",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleDocumentKeyDown",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleMouseOver",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleMouseOut",
              privacy: "private",
            },
            {
              kind: "method",
              name: "hasTrigger",
              privacy: "private",
              parameters: [
                {
                  name: "triggerType",
                  type: {
                    text: "string",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleOpenChange",
            },
            {
              kind: "method",
              name: "handleOptionsChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "show",
              description: "Shows the tooltip.",
            },
            {
              kind: "method",
              name: "hide",
              description: "Hides the tooltip",
            },
          ],
          events: [
            {
              description: "Emitted when the tooltip begins to show.",
              name: "sl-show",
              reactName: "onSlShow",
              eventName: "SlShowEvent",
            },
            {
              description:
                "Emitted after the tooltip has shown and all animations are complete.",
              name: "sl-after-show",
              reactName: "onSlAfterShow",
              eventName: "SlAfterShowEvent",
            },
            {
              description: "Emitted when the tooltip begins to hide.",
              name: "sl-hide",
              reactName: "onSlHide",
              eventName: "SlHideEvent",
            },
            {
              description:
                "Emitted after the tooltip has hidden and all animations are complete.",
              name: "sl-after-hide",
              reactName: "onSlAfterHide",
              eventName: "SlAfterHideEvent",
            },
          ],
          attributes: [
            {
              name: "content",
              type: {
                text: "string",
              },
              default: "''",
              description:
                "The tooltip's content. If you need to display HTML, use the `content` slot instead.",
              fieldName: "content",
            },
            {
              name: "placement",
              type: {
                text: "| 'top'\n    | 'top-start'\n    | 'top-end'\n    | 'right'\n    | 'right-start'\n    | 'right-end'\n    | 'bottom'\n    | 'bottom-start'\n    | 'bottom-end'\n    | 'left'\n    | 'left-start'\n    | 'left-end'",
              },
              default: "'top'",
              description:
                "The preferred placement of the tooltip. Note that the actual placement may vary as needed to keep the tooltip\ninside of the viewport.",
              fieldName: "placement",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Disables the tooltip so it won't show when triggered.",
              fieldName: "disabled",
            },
            {
              name: "distance",
              type: {
                text: "number",
              },
              default: "8",
              description:
                "The distance in pixels from which to offset the tooltip away from its target.",
              fieldName: "distance",
            },
            {
              name: "open",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Indicates whether or not the tooltip is open. You can use this in lieu of the show/hide methods.",
              fieldName: "open",
            },
            {
              name: "skidding",
              type: {
                text: "number",
              },
              default: "0",
              description:
                "The distance in pixels from which to offset the tooltip along its target.",
              fieldName: "skidding",
            },
            {
              name: "trigger",
              type: {
                text: "string",
              },
              default: "'hover focus'",
              description:
                "Controls how the tooltip is activated. Possible options include `click`, `hover`, `focus`, and `manual`. Multiple\noptions can be passed by separating them with a space. When manual is used, the tooltip must be activated\nprogrammatically.",
              fieldName: "trigger",
            },
            {
              name: "hoist",
              type: {
                text: "boolean",
              },
              default: "false",
              description:
                "Enable this option to prevent the tooltip from being clipped when the component is placed inside a container with\n`overflow: auto|hidden|scroll`. Hoisting uses a fixed positioning strategy that works in many, but not all,\nscenarios.",
              fieldName: "hoist",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Tooltips display additional information based on a specific action.",
          tagNameWithoutPrefix: "tooltip",
          tagName: "sl-tooltip",
          customElement: true,
          jsDoc:
            "/**\n * @summary Tooltips display additional information based on a specific action.\n * @documentation https://shoelace.style/components/tooltip\n * @status stable\n * @since 2.0\n *\n * @dependency sl-popup\n *\n * @slot - The tooltip's target element. Avoid slotting in more than one element, as subsequent ones will be ignored.\n * @slot content - The content to render in the tooltip. Alternatively, you can use the `content` attribute.\n *\n * @event sl-show - Emitted when the tooltip begins to show.\n * @event sl-after-show - Emitted after the tooltip has shown and all animations are complete.\n * @event sl-hide - Emitted when the tooltip begins to hide.\n * @event sl-after-hide - Emitted after the tooltip has hidden and all animations are complete.\n *\n * @csspart base - The component's base wrapper, an `<sl-popup>` element.\n * @csspart base__popup - The popup's exported `popup` part. Use this to target the tooltip's popup container.\n * @csspart base__arrow - The popup's exported `arrow` part. Use this to target the tooltip's arrow.\n * @csspart body - The tooltip's body where its content is rendered.\n *\n * @cssproperty --max-width - The maximum width of the tooltip before its content will wrap.\n * @cssproperty --hide-delay - The amount of time to wait before hiding the tooltip when hovering.\n * @cssproperty --show-delay - The amount of time to wait before showing the tooltip when hovering.\n *\n * @animation tooltip.show - The animation to use when showing the tooltip.\n * @animation tooltip.hide - The animation to use when hiding the tooltip.\n */",
          documentation: "https://shoelace.style/components/tooltip",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-popup"],
          animations: [
            {
              name: "tooltip.show",
              description: "The animation to use when showing the tooltip.",
            },
            {
              name: "tooltip.hide",
              description: "The animation to use when hiding the tooltip.",
            },
          ],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTooltip",
            module: "components/tooltip/tooltip.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tree/tree.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTree",
          cssProperties: [
            {
              description: "The size of the indentation for nested items.",
              name: "--indent-size",
              default: "var(--sl-spacing-medium)",
            },
            {
              description: "The color of the indentation line.",
              name: "--indent-guide-color",
              default: "var(--sl-color-neutral-200)",
            },
            {
              description:
                "The amount of vertical spacing to leave between the top and bottom of the indentation line's starting position.",
              name: "--indent-guide-offset",
              default: "0",
            },
            {
              description:
                "The style of the indentation line, e.g. solid, dotted, dashed.",
              name: "--indent-guide-style",
              default: "solid",
            },
            {
              description: "The width of the indentation line.",
              name: "--indent-guide-width",
              default: "0",
            },
          ],
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
          ],
          slots: [
            {
              description: "The default slot.",
              name: "",
            },
            {
              description:
                "The icon to show when the tree item is expanded. Works best with `<sl-icon>`.",
              name: "expand-icon",
            },
            {
              description:
                "The icon to show when the tree item is collapsed. Works best with `<sl-icon>`.",
              name: "collapse-icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "expandedIconSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "collapsedIconSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "selection",
              type: {
                text: "'single' | 'multiple' | 'leaf'",
              },
              default: "'single'",
              description:
                "The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple\ndisplays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.",
              attribute: "selection",
            },
            {
              kind: "field",
              name: "lastFocusedItem",
              type: {
                text: "SlTreeItem | null",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "mutationObserver",
              type: {
                text: "MutationObserver",
              },
              privacy: "private",
            },
            {
              kind: "field",
              name: "clickTarget",
              type: {
                text: "SlTreeItem | null",
              },
              privacy: "private",
              default: "null",
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "method",
              name: "getExpandButtonIcon",
              privacy: "private",
              parameters: [
                {
                  name: "status",
                  type: {
                    text: "'expand' | 'collapse'",
                  },
                },
              ],
            },
            {
              kind: "field",
              name: "initTreeItem",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleTreeChanged",
              privacy: "private",
            },
            {
              kind: "method",
              name: "selectItem",
              privacy: "private",
              parameters: [
                {
                  name: "selectedItem",
                  type: {
                    text: "SlTreeItem",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "getAllTreeItems",
              privacy: "private",
            },
            {
              kind: "method",
              name: "focusItem",
              privacy: "private",
              parameters: [
                {
                  name: "item",
                  optional: true,
                  type: {
                    text: "SlTreeItem | null",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleKeyDown",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "KeyboardEvent",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleClick",
              privacy: "private",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "Event",
                  },
                },
              ],
            },
            {
              kind: "method",
              name: "handleMouseDown",
              parameters: [
                {
                  name: "event",
                  type: {
                    text: "MouseEvent",
                  },
                },
              ],
            },
            {
              kind: "field",
              name: "handleFocusOut",
              privacy: "private",
            },
            {
              kind: "field",
              name: "handleFocusIn",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleSelectionChange",
            },
          ],
          events: [
            {
              type: {
                text: "{ selection: SlTreeItem[] }",
              },
              description:
                "Emitted when a tree item is selected or deselected.",
              name: "sl-selection-change",
              reactName: "onSlSelectionChange",
              eventName: "SlSelectionChangeEvent",
            },
          ],
          attributes: [
            {
              name: "selection",
              type: {
                text: "'single' | 'multiple' | 'leaf'",
              },
              default: "'single'",
              description:
                "The selection behavior of the tree. Single selection allows only one node to be selected at a time. Multiple\ndisplays checkboxes and allows more than one node to be selected. Leaf allows only leaf nodes to be selected.",
              fieldName: "selection",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.",
          tagNameWithoutPrefix: "tree",
          tagName: "sl-tree",
          customElement: true,
          jsDoc:
            "/**\n * @summary Trees allow you to display a hierarchical list of selectable [tree items](/components/tree-item). Items with children can be expanded and collapsed as desired by the user.\n * @documentation https://shoelace.style/components/tree\n * @status stable\n * @since 2.0\n *\n * @event {{ selection: SlTreeItem[] }} sl-selection-change - Emitted when a tree item is selected or deselected.\n *\n * @slot - The default slot.\n * @slot expand-icon - The icon to show when the tree item is expanded. Works best with `<sl-icon>`.\n * @slot collapse-icon - The icon to show when the tree item is collapsed. Works best with `<sl-icon>`.\n *\n * @csspart base - The component's base wrapper.\n *\n * @cssproperty [--indent-size=var(--sl-spacing-medium)] - The size of the indentation for nested items.\n * @cssproperty [--indent-guide-color=var(--sl-color-neutral-200)] - The color of the indentation line.\n * @cssproperty [--indent-guide-offset=0] - The amount of vertical spacing to leave between the top and bottom of the\n *  indentation line's starting position.\n * @cssproperty [--indent-guide-style=solid] - The style of the indentation line, e.g. solid, dotted, dashed.\n * @cssproperty [--indent-guide-width=0] - The width of the indentation line.\n */",
          documentation: "https://shoelace.style/components/tree",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTree",
            module: "components/tree/tree.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/tree-item/tree-item.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlTreeItem",
          cssParts: [
            {
              description: "The component's base wrapper.",
              name: "base",
            },
            {
              description:
                "The tree item's container. This element wraps everything except slotted tree item children.",
              name: "item",
            },
            {
              description: "Applied when the tree item is disabled.",
              name: "item--disabled",
            },
            {
              description: "Applied when the tree item is expanded.",
              name: "item--expanded",
            },
            {
              description: "Applied when the selection is indeterminate.",
              name: "item--indeterminate",
            },
            {
              description: "Applied when the tree item is selected.",
              name: "item--selected",
            },
            {
              description: "The tree item's indentation container.",
              name: "indentation",
            },
            {
              description:
                "The container that wraps the tree item's expand button and spinner.",
              name: "expand-button",
            },
            {
              description:
                "The spinner that shows when a lazy tree item is in the loading state.",
              name: "spinner",
            },
            {
              description: "The spinner's base part.",
              name: "spinner__base",
            },
            {
              description: "The tree item's label.",
              name: "label",
            },
            {
              description:
                "The container that wraps the tree item's nested children.",
              name: "children",
            },
            {
              description: "The checkbox that shows when using multiselect.",
              name: "checkbox",
            },
            {
              description: "The checkbox's exported `base` part.",
              name: "checkbox__base",
            },
            {
              description: "The checkbox's exported `control` part.",
              name: "checkbox__control",
            },
            {
              description: "The checkbox's exported `control--checked` part.",
              name: "checkbox__control--checked",
            },
            {
              description:
                "The checkbox's exported `control--indeterminate` part.",
              name: "checkbox__control--indeterminate",
            },
            {
              description: "The checkbox's exported `checked-icon` part.",
              name: "checkbox__checked-icon",
            },
            {
              description: "The checkbox's exported `indeterminate-icon` part.",
              name: "checkbox__indeterminate-icon",
            },
            {
              description: "The checkbox's exported `label` part.",
              name: "checkbox__label",
            },
          ],
          slots: [
            {
              description: "The default slot.",
              name: "",
            },
            {
              description: "The icon to show when the tree item is expanded.",
              name: "expand-icon",
            },
            {
              description: "The icon to show when the tree item is collapsed.",
              name: "collapse-icon",
            },
          ],
          members: [
            {
              kind: "field",
              name: "dependencies",
              type: {
                text: "object",
              },
              static: true,
              default:
                "{ 'sl-checkbox': SlCheckbox, 'sl-icon': SlIcon, 'sl-spinner': SlSpinner }",
            },
            {
              kind: "method",
              name: "isTreeItem",
              static: true,
              parameters: [
                {
                  name: "node",
                  type: {
                    text: "Node",
                  },
                },
              ],
            },
            {
              kind: "field",
              name: "localize",
              privacy: "private",
              readonly: true,
              default: "new LocalizeController(this)",
            },
            {
              kind: "field",
              name: "indeterminate",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "isLeaf",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "loading",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "selectable",
              type: {
                text: "boolean",
              },
              default: "false",
            },
            {
              kind: "field",
              name: "expanded",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Expands the tree item.",
              attribute: "expanded",
              reflects: true,
            },
            {
              kind: "field",
              name: "selected",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the tree item in a selected state.",
              attribute: "selected",
              reflects: true,
            },
            {
              kind: "field",
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the tree item.",
              attribute: "disabled",
              reflects: true,
            },
            {
              kind: "field",
              name: "lazy",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Enables lazy loading behavior.",
              attribute: "lazy",
              reflects: true,
            },
            {
              kind: "field",
              name: "defaultSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "childrenSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "field",
              name: "itemElement",
              type: {
                text: "HTMLDivElement",
              },
            },
            {
              kind: "field",
              name: "childrenContainer",
              type: {
                text: "HTMLDivElement",
              },
            },
            {
              kind: "field",
              name: "expandButtonSlot",
              type: {
                text: "HTMLSlotElement",
              },
            },
            {
              kind: "method",
              name: "animateCollapse",
              privacy: "private",
            },
            {
              kind: "method",
              name: "isNestedItem",
              privacy: "private",
              return: {
                type: {
                  text: "boolean",
                },
              },
            },
            {
              kind: "method",
              name: "handleChildrenSlotChange",
              privacy: "private",
            },
            {
              kind: "method",
              name: "animateExpand",
              privacy: "private",
            },
            {
              kind: "method",
              name: "handleLoadingChange",
            },
            {
              kind: "method",
              name: "handleDisabledChange",
            },
            {
              kind: "method",
              name: "handleSelectedChange",
            },
            {
              kind: "method",
              name: "handleExpandedChange",
            },
            {
              kind: "method",
              name: "handleExpandAnimation",
            },
            {
              kind: "method",
              name: "handleLazyChange",
            },
            {
              kind: "method",
              name: "getChildrenItems",
              return: {
                type: {
                  text: "SlTreeItem[]",
                },
              },
              parameters: [
                {
                  name: "{ includeDisabled = true }",
                  default: "{}",
                  type: {
                    text: "{ includeDisabled?: boolean }",
                  },
                },
              ],
              description: "Gets all the nested tree items in this node.",
            },
          ],
          events: [
            {
              description: "Emitted when the tree item expands.",
              name: "sl-expand",
              reactName: "onSlExpand",
              eventName: "SlExpandEvent",
            },
            {
              description:
                "Emitted after the tree item expands and all animations are complete.",
              name: "sl-after-expand",
              reactName: "onSlAfterExpand",
              eventName: "SlAfterExpandEvent",
            },
            {
              description: "Emitted when the tree item collapses.",
              name: "sl-collapse",
              reactName: "onSlCollapse",
              eventName: "SlCollapseEvent",
            },
            {
              description:
                "Emitted after the tree item collapses and all animations are complete.",
              name: "sl-after-collapse",
              reactName: "onSlAfterCollapse",
              eventName: "SlAfterCollapseEvent",
            },
            {
              description: "Emitted when the tree item's lazy state changes.",
              name: "sl-lazy-change",
              reactName: "onSlLazyChange",
              eventName: "SlLazyChangeEvent",
            },
            {
              description:
                "Emitted when a lazy item is selected. Use this event to asynchronously load data and append items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading state and update the tree.",
              name: "sl-lazy-load",
              reactName: "onSlLazyLoad",
              eventName: "SlLazyLoadEvent",
            },
          ],
          attributes: [
            {
              name: "expanded",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Expands the tree item.",
              fieldName: "expanded",
            },
            {
              name: "selected",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Draws the tree item in a selected state.",
              fieldName: "selected",
            },
            {
              name: "disabled",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Disables the tree item.",
              fieldName: "disabled",
            },
            {
              name: "lazy",
              type: {
                text: "boolean",
              },
              default: "false",
              description: "Enables lazy loading behavior.",
              fieldName: "lazy",
            },
          ],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).",
          tagNameWithoutPrefix: "tree-item",
          tagName: "sl-tree-item",
          customElement: true,
          jsDoc:
            "/**\n * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).\n * @documentation https://shoelace.style/components/tree-item\n * @status stable\n * @since 2.0\n *\n * @dependency sl-checkbox\n * @dependency sl-icon\n * @dependency sl-spinner\n *\n * @event sl-expand - Emitted when the tree item expands.\n * @event sl-after-expand - Emitted after the tree item expands and all animations are complete.\n * @event sl-collapse - Emitted when the tree item collapses.\n * @event sl-after-collapse - Emitted after the tree item collapses and all animations are complete.\n * @event sl-lazy-change - Emitted when the tree item's lazy state changes.\n * @event sl-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append\n *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading\n *  state and update the tree.\n *\n * @slot - The default slot.\n * @slot expand-icon - The icon to show when the tree item is expanded.\n * @slot collapse-icon - The icon to show when the tree item is collapsed.\n *\n * @csspart base - The component's base wrapper.\n * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.\n * @csspart item--disabled - Applied when the tree item is disabled.\n * @csspart item--expanded - Applied when the tree item is expanded.\n * @csspart item--indeterminate - Applied when the selection is indeterminate.\n * @csspart item--selected - Applied when the tree item is selected.\n * @csspart indentation - The tree item's indentation container.\n * @csspart expand-button - The container that wraps the tree item's expand button and spinner.\n * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.\n * @csspart spinner__base - The spinner's base part.\n * @csspart label - The tree item's label.\n * @csspart children - The container that wraps the tree item's nested children.\n * @csspart checkbox - The checkbox that shows when using multiselect.\n * @csspart checkbox__base - The checkbox's exported `base` part.\n * @csspart checkbox__control - The checkbox's exported `control` part.\n * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.\n * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.\n * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.\n * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.\n * @csspart checkbox__label - The checkbox's exported `label` part.\n */",
          documentation: "https://shoelace.style/components/tree-item",
          status: "stable",
          since: "2.0",
          dependencies: ["sl-checkbox", "sl-icon", "sl-spinner"],
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlTreeItem",
            module: "components/tree-item/tree-item.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "components/visually-hidden/visually-hidden.js",
      declarations: [
        {
          kind: "class",
          description: "",
          name: "SlVisuallyHidden",
          slots: [
            {
              description: "The content to be visually hidden.",
              name: "",
            },
          ],
          members: [],
          superclass: {
            name: "ShoelaceElement",
            module: "/src/internal/shoelace-element.js",
          },
          summary:
            "The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.",
          tagNameWithoutPrefix: "visually-hidden",
          tagName: "sl-visually-hidden",
          customElement: true,
          jsDoc:
            "/**\n * @summary The visually hidden utility makes content accessible to assistive devices without displaying it on the screen.\n * @documentation https://shoelace.style/components/visually-hidden\n * @status stable\n * @since 2.0\n *\n * @slot - The content to be visually hidden.\n */",
          documentation: "https://shoelace.style/components/visually-hidden",
          status: "stable",
          since: "2.0",
        },
      ],
      exports: [
        {
          kind: "js",
          name: "default",
          declaration: {
            name: "SlVisuallyHidden",
            module: "components/visually-hidden/visually-hidden.js",
          },
        },
      ],
    },
    {
      kind: "javascript-module",
      path: "dist/components/alert/alert.js",
      deprecated: false,
      declarations: [],
      exports: [
        {
          kind: "custom-element-definition",
          name: "sl-alert",
          declaration: {
            name: "SlAlert",
            module: "dist/components/alert/alert.component.js",
          },
        },
      ],
    },
  ],
  package: {
    name: "@shoelace-style/shoelace",
    description: "A forward-thinking library of web components.",
    version: "2.19.1",
    author: "Cory LaViska",
    homepage: "https://github.com/shoelace-style/shoelace",
    license: "MIT",
  },
};
