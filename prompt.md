Your task is to implement a new landing page as main page, following the design + development brief below. Implement thoroughly, in a step-by-step manner, and use built-in, standard Tailwind CSS design tokens instead of hardcoding values.

For colors and font families, use the defined values present in
@tailwind.config.js, e.g. 'bg-primary-500' etc. instead of the hardcoded primary/secondary values in the JSON brief. For one-off colors/grays etc. the JSON values are acceptable.

**Requirements**

- responsive (full width bg with centered content on larger screens)
- theme aware components with light and dark mode support (you can toggle with @ThemeSwitch.tsx; make sure to include that in the menu bar)
  - update @data/config/colors.js to match the colors in the design brief
  - *important* make sure to include light and dark mode colors by using Tailwind's dark mode classes (dark:)
  - all components must adapt to theme changes
- *do not use* magic strings, hex values, or px values. Replace all with Tailwind classes if possible.
- split reusable or complex parts of the UI into components so the code is maintainable and easy to understand.
- if any sample data is generated, place it in a separate file to keep the code clean.

**Note**

- the app is already running a dev server at port 6006

**Assignment brief**

You are implementing the marketing site for Motti Pinchas, a modern mentor for founders.  
The page is a single scrolling canvas framed by a dark border, with a warm off-white content area.  
The visual style is minimal, editorial and confident: strong black typography, generous white-space, and soft card elevations.  

Follow these principles:

- Use the defined tokens for colors, type sizes, spacing, radii and shadows.  
- The page background is warm light in standard mode and nearly black in dark mode; cards and key content rest on slightly elevated surfaces.  
- Headings are bold, large, and tightly spaced; body text is softer gray with comfortable line height.  
- Main call-to-action buttons are pill-shaped, high-contrast, centered in the hero and repeated near the bottom of the page.  
- The hero centers a vertical stack of text over the portraits strip; below it, sections are strictly aligned to a central column, with clear vertical rhythm.  
- Service offerings are displayed as a responsive grid of simple white cards with a small plus sign in the top left, each containing a short title and two-line description.  
- Community and results are expressed through large numeric stats and a simple diagonal line chart band, giving a sense of growth without visual clutter.  
- The expert section is a two-column band: on the left, heading, paragraph and a secondary action; on the right, a vertical list of three benefits with minimalist arrow indicators.  
- The charts strip shows three compact analytic cards in a row on wide screens, collapsing into a single column on small screens; each card contains a tiny chart and a caption.  
- FAQ items are simple accordions with a question row, chevron indicator and thin divider lines between items; only one is open in the default view.  
- The bottom band contains a bold closing message (“Enroll Now”), a compact secondary navigation list and round social icons centered underneath.  

Across all breakpoints:

- Keep the central column narrow and centered; outer margins grow with screen size.  
- Multi-column layouts collapse to single column on small screens, maintaining readable text widths and vertical spacing.  
- Preserve the same hierarchy of tokens: headings always use the display scale, body text the body scale, all borders use the soft neutral, all primary actions use the primary button tokens.  

Your implementation should treat the tokens as the single source of truth: any color, size, radius, or shadow used in the layout must reference an existing token or a semantic alias derived from it.


**Design specification**

{
  "meta": {
    "project": "Motti Pinchas – Mentor Landing Page",
    "description": "Single-page marketing/mentor site with clean, editorial layout: hero, offering overview, social proof, FAQ and final CTA.",
    "breakpoints": {
      // Tailwind defaults
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    }
  },

  "theme": {
    "colors": {
      // Use these as design tokens. Do not hardcode raw hexes elsewhere.
      "palette": {
        "primary": {
          // Warm off-white / sand background
          "50":  "#F9FAF5",
          "100": "#F6F7F0",   // main page background in light mode
          "200": "#E5E6DA"
        },
        "secondary": {
          // Neutral black for typography / strong contrast
          "900": "#111111",
          "800": "#1F1F1F",
          "700": "#2F2F2F"
        },
        "gray": {
          "50":  "#FFFFFF",   // cards, tiles
          "100": "#F3F3F3",   // subtle blocks / footer bg
          "200": "#E5E5E5",   // divider lines, chart grid
          "400": "#9B9B9B",   // secondary text
          "600": "#555555"    // body text
        },
        "accent": {
          "primary": "#111111",  // same as secondary.900 for buttons/icons
          "muted":   "#C4C4C4"   // for charts, stats bars, subtle icons
        }
      },

      "lightMode": {
        "bodyBg": "@primary.100",
        "pageBg": "@primary.100",
        "cardBg": "@gray.50",
        "footerBg": "@gray.100",
        "heading": "@secondary.900",
        "bodyText": "@gray.600",
        "mutedText": "@gray.400",
        "buttonBgPrimary": "@accent.primary",
        "buttonTextPrimary": "@primary.50",
        "borderSoft": "@gray.200",
        "chartStroke": "@accent.muted"
      },

      "darkMode": {
        "bodyBg": "#050506",
        "pageBg": "#050506",
        "cardBg": "#111111",
        "footerBg": "#111111",
        "heading": "#F9FAFB",
        "bodyText": "#E5E7EB",
        "mutedText": "#9CA3AF",
        "buttonBgPrimary": "#F9FAFB",
        "buttonTextPrimary": "#050506",
        "borderSoft": "#27272A",
        "chartStroke": "#6B7280"
      }
    },

    "typography": {
      "fonts": {
        // Any clean grotesk/sans stack; one strong family is enough.
        "display": "var(--font-display, system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif)",
        "body":    "var(--font-body, system-ui, -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif)"
      },
      "scale": {
        // Approximate sizes derived from the mock
        "h1": { "fontSize": "2.5rem", "lineHeight": "1.1", "letterSpacing": "0.02em", "weight": 800 },
        "h2": { "fontSize": "1.75rem", "lineHeight": "1.2", "letterSpacing": "0.01em", "weight": 700 },
        "h3": { "fontSize": "1.25rem", "lineHeight": "1.4", "letterSpacing": "0.01em", "weight": 600 },
        "bodyLg": { "fontSize": "1rem", "lineHeight": "1.7", "weight": 400 },
        "body": { "fontSize": "0.95rem", "lineHeight": "1.6", "weight": 400 },
        "label": { "fontSize": "0.8rem", "letterSpacing": "0.08em", "weight": 500, "transform": "uppercase" },
        "eyebrow": { "fontSize": "0.85rem", "letterSpacing": "0.14em", "weight": 500, "transform": "uppercase" },
        "statNumber": { "fontSize": "1.9rem", "lineHeight": "1.1", "weight": 700 }
      }
    },

    "spacing": {
      "pageGutterX": {
        "base": 24,
        "lg": 72
      },
      "section": {
        "paddingY": {
          "base": 56,
          "lg": 96
        }
      },
      "contentMaxWidth": 1120
    },

    "radius": {
      "card": 8,
      "button": 999,
      "image": 12
    },

    "shadows": {
      "card": "0 12px 35px rgba(0,0,0,0.03)",
      "button": "0 12px 30px rgba(0,0,0,0.16)",
      "elevatedStrip": "0 16px 40px rgba(0,0,0,0.07)"
    }
  },

  "layout": {
    "page": {
      "background": "lightMode.bodyBg",
      "outerFrame": {
        // Dark frame around the light canvas
        "color": "@secondary.800",
        "thickness": 24
      },
      "content": {
        "maxWidth": "@spacing.contentMaxWidth",
        "alignment": "center",
        "paddingX": "@spacing.pageGutterX.base",
        "paddingY": "@spacing.section.paddingY.base"
      },
      "stackingOrder": [
        "header",
        "hero",
        "coursesOverview",
        "communityStats",
        "expertSection",
        "chartsStrip",
        "faq",
        "finalCta",
        "footer"
      ]
    },

    "sections": {
      "header": {
        "type": "top-nav",
        "layout": "horizontal",
        "alignment": "space-between",
        "height": 72,
        "elements": {
          "left": ["logo"],
          "right": ["menuIcon"]
        },
        "behavior": {
          "stickyOnScroll": false
        }
      },

      "hero": {
        "type": "split-vertical",
        "alignment": "center",
        "spacingY": 32,
        "content": {
          "eyebrow": "Get a big challenge now",
          "heading": "START A EXCELLENT CAREER JOURNEY WITH US",
          "subheading": "One central paragraph, max 2 lines, constrained width (~60ch).",
          "primaryAction": "Join Now",
          "supportingNote": null
        },
        "media": {
          "type": "three-portrait-strip",
          "layout": "horizontal",
          "aspectRatio": "3:4",
          "treatment": "black-and-white",
          "mask": "vertical gradient fade towards bottom"
        }
      },

      "coursesOverview": {
        "type": "heading + grid",
        "heading": {
          "title": "Ready to build a bright career",
          "subtitle": "with our most outstanding courses"
        },
        "grid": {
          "columns": {
            "sm": 1,
            "md": 2,
            "lg": 3
          },
          "rows": 2,
          "card": {
            "style": "borderless-elevated",
            "bg": "@gray.50",
            "shadow": "@shadows.card",
            "padding": 24,
            "header": {
              "icon": "plus-minimal", // subtle + sign at top-left
              "alignment": "top-left"
            },
            "content": {
              "titleStyle": "h3",
              "bodyStyle": "body",
              "maxLines": 3
            },
            "hover": {
              "translateY": -4,
              "shadow": "stronger(card)",
              "cursor": "pointer"
            }
          }
        }
      },

      "communityStats": {
        "type": "stats-with-diagonal-divider",
        "heading": {
          "title": "Join a thriving community",
          "subtitle": "One-line description about active learners and mentors."
        },
        "layout": {
          "top": "diagonal-line-graph",
          "bottom": "two-stats-row"
        },
        "graph": {
          "orientation": "bottom-left to top-right",
          "lineColor": "@accent.muted",
          "lineWeight": 1,
          "background": "@primary.100",
          "height": 120
        },
        "stats": [
          {
            "label": "Course Completion Satisfaction",
            "value": "98%"
          },
          {
            "label": "Active Learners",
            "value": "500+"
          }
        ]
      },

      "expertSection": {
        "type": "two-column",
        "heading": {
          "title": "Learn Directly from the Experts",
          "subtitle": "Short descriptive paragraph beneath heading, max 2–3 lines."
        },
        "layout": {
          "columns": {
            "sm": 1,
            "md": 2
          },
          "columnGap": 64
        },
        "left": {
          "primaryAction": {
            "label": "Learn More",
            "variant": "primary"
          }
        },
        "right": {
          "bullets": [
            "Personalized mentorship for every learner",
            "Real-world projects and feedback",
            "Flexible online learning experience"
          ],
          "bulletStyle": "plain text with leading arrow icon"
        }
      },

      "chartsStrip": {
        "type": "full-width-strip",
        "background": "@primary.100",
        "elevation": "@shadows.elevatedStrip",
        "padding": {
          "x": 32,
          "y": 32
        },
        "content": {
          "chartsRow": {
            "columns": {
              "sm": 1,
              "md": 2,
              "lg": 3
            },
            "card": {
              "bg": "@gray.50",
              "radius": "@radius.card",
              "border": "@borderSoft",
              "padding": 16,
              "chartArea": {
                "height": 120,
                "gridLines": "@gray.200",
                "dataColor": "@accent.primary"
              },
              "caption": "small label below chart"
            }
          }
        }
      },

      "faq": {
        "type": "accordion-list",
        "background": "@primary.100",
        "heading": {
          "label": "Our high success rate reflects the real",
          "title": "PROGRESS AND SATISFACTION",
          "subtitle": "of learners worldwide."
        },
        "accordion": {
          "itemCount": 5,
          "item": {
            "paddingY": 14,
            "paddingX": 0,
            "borderBottom": "@borderSoft",
            "questionStyle": "bodyLg",
            "answerStyle": "body",
            "indicator": "chevron-right → chevron-down on open",
            "hover": {
              "questionColor": "@secondary.900"
            }
          }
        }
      },

      "finalCta": {
        "type": "band",
        "background": "@gray.100",
        "alignment": "left",
        "content": {
          "heading": "Enroll Now",
          "subnav": [
            "About Us",
            "Courses",
            "Mentors",
            "Contact",
            "Privacy Policy"
          ],
          "socialIcons": [
            "facebook",
            "linkedin",
            "instagram"
          ]
        }
      },

      "footer": {
        "type": "simple",
        "background": "@gray.100",
        "content": {
          "copyright": "© Company Name – All rights reserved.",
          "alignment": "center",
          "font": "label"
        }
      }
    }
  },

  "components": {
    "Button": {
      "variants": {
        "primary": {
          "bg": "theme.colors.lightMode.buttonBgPrimary",
          "bgDark": "theme.colors.darkMode.buttonBgPrimary",
          "textColor": "theme.colors.lightMode.buttonTextPrimary",
          "textColorDark": "theme.colors.darkMode.buttonTextPrimary",
          "paddingX": 28,
          "paddingY": 10,
          "radius": "@radius.button",
          "shadow": "@shadows.button",
          "font": "bodyLg",
          "hover": {
            "bgLighten": 0.04,
            "translateY": -1
          }
        },
        "ghost": {
          "bg": "transparent",
          "borderColor": "@borderSoft",
          "textColor": "@secondary.900",
          "hoverBg": "rgba(0,0,0,0.03)"
        }
      }
    },

    "NavBar": {
      "height": 72,
      "logoArea": {
        "alignment": "left",
        "font": "bodyLg",
        "weight": 700
      },
      "menu": {
        "type": "icon-only",
        "icon": "three-horizontal-lines",
        "size": 24
      }
    },

    "CardGrid": {
      "gap": 16,
      "cardMinHeight": 160,
      "titleFont": "h3",
      "bodyFont": "body",
      "headerIcon": {
        "symbol": "+",
        "size": 16,
        "position": "top-left"
      }
    },

    "StatsRow": {
      "layout": "two-column",
      "stat": {
        "valueFont": "statNumber",
        "labelFont": "body",
        "gap": 4
      }
    },

    "FAQItem": {
      "states": {
        "collapsed": {
          "answerVisible": false
        },
        "expanded": {
          "answerVisible": true
        }
      },
      "iconRotationOnExpand": 90
    }
  },

  "responsive": {
    "global": {
      "sm": {
        "pageGutterX": 16,
        "sectionPaddingY": 40,
        "textAlignment": "center for hero and stats, left for body copy",
        "stacking": "all multi-column layouts collapse to single column with vertical spacing 32"
      },
      "md": {
        "pageGutterX": 24,
        "sectionPaddingY": 56,
        "gridColumns": {
          "coursesGrid": 2,
          "chartsRow": 2
        }
      },
      "lg": {
        "pageGutterX": 72,
        "sectionPaddingY": 96,
        "gridColumns": {
          "coursesGrid": 3,
          "chartsRow": 3
        },
        "layout": {
          "expertSection": "two-column",
          "hero": "centered text + media stacked with tighter spacing"
        }
      },
      "xl": {
        "contentMaxWidth": 1200
      }
    },

    "darkModeBehavior": {
      "backgrounds": "swap lightMode.* colors to darkMode.* equivalents",
      "cards": "use dark cardBg with subtle borderSoft outline",
      "shadows": "weaker/lower contrast, rely more on borders than shadows",
      "images": "keep portraits monochrome; if available, slightly increase contrast",
      "dividers": "use darker neutral instead of light gray"
    }
  }
}

