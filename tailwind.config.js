module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    screens: {
      xs: "350px",
      sm: "500px",
      md: "700px",
      lg: "900px",
      xl: "1240px",
      "2xl": "1400px",
      "3xl": "1600px",
      "4xl": "1840px"
    },
    minHeight: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%"
    },
    extend: {
      animation: {
        "bounce-slow": "bounce 2s infinite",
        close: "close .2s ease-in-out",
        hide: "hide .2s ease-in-out",
        open: "open .2s ease-in-out",
        show: "show .2s ease-in-out"
      },
      borderRadius: {
        none: "0px",
        1: "0.0625rem",
        2: "0.125rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        12: "0.75rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        full: "9999rem"
      },
      borderWidth: {
        none: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
        6: "6px",
        7: "7px",
        8: "8px",
        10: "10px"
      },
      boxShadow: {
        sm: "0px 10px 50px rgba(0, 0, 0, 0.03)"
      },
      colors: {
        transparent: "transparent",
        black: {
          DEFAULT: "var(--color-black)",
          3: "var(--color-black-3)",
          5: "var(--color-black-5)",
          10: "var(--color-black-10)",
          20: "var(--color-black-20)",
          40: "var(--color-black-40)",
          60: "var(--color-black-60)",
          80: "var(--color-black-80)"
        },
        white: {
          DEFAULT: "var(--color-white)",
          3: "var(--color-white-3)",
          5: "var(--color-white-5)",
          10: "var(--color-white-10)",
          20: "var(--color-white-20)",
          40: "var(--color-white-40)",
          60: "var(--color-white-60)",
          80: "var(--color-white-80)"
        },
        blue: {
          DEFAULT: "var(--color-blue)",
          5: "var(--color-blue-5)",
          10: "var(--color-blue-10)",
          20: "var(--color-blue-20)",
          40: "var(--color-blue-40)",
          60: "var(--color-blue-60)",
          80: "var(--color-blue-80)",
          dark: {
            DEFAULT: "var(--color-blue-dark)",
            5: "var(--color-blue-dark-5)",
            10: "var(--color-blue-dark-10)",
            20: "var(--color-blue-dark-20)",
            40: "var(--color-blue-dark-40)",
            60: "var(--color-blue-dark-60)",
            80: "var(--color-blue-dark-80)"
          }
        },
        mint: {
          DEFAULT: "var(--color-mint)",
          5: "var(--color-mint-5)",
          10: "var(--color-mint-10)",
          20: "var(--color-mint-20)",
          40: "var(--color-mint-40)",
          60: "var(--color-mint-60)",
          80: "var(--color-mint-80)"
        },
        pink: {
          DEFAULT: "var(--color-pink)",
          5: "var(--color-pink-5)",
          10: "var(--color-pink-10)",
          20: "var(--color-pink-20)",
          40: "var(--color-pink-40)",
          60: "var(--color-pink-60)",
          80: "var(--color-pink-80)"
        },
        purple: {
          DEFAULT: "var(--color-purple)",
          5: "var(--color-purple-5)",
          10: "var(--color-purple-10)",
          20: "var(--color-purple-20)",
          40: "var(--color-purple-40)",
          60: "var(--color-purple-60)",
          80: "var(--color-purple-80)"
        },
        toast: {
          error: "var(--toastify-color-error)",
          error2: "var(--toastify-color-error2)",
          error3: "var(--toastify-color-error3)",
          info: "var(--toastify-color-info)",
          info2: "var(--toastify-color-info2)",
          info3: "var(--toastify-color-info3)",
          success: "var(--toastify-color-success)",
          success2: "var(--toastify-color-success2)",
          success3: "var(--toastify-color-success3)",
          warning: "var(--toastify-color-warning)",
          warning2: "var(--toastify-color-warning2)",
          warning3: "var(--toastify-color-warning3)"
        }
      },
      fontSize: {
        8: "0.5rem",
        9: "0.5625rem",
        10: "0.625rem",
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        42: "2.625rem",
        48: "3rem",
        54: "3.375rem",
        60: "3.75rem",
        64: "4rem",
        80: "5rem",
        180: "11.25rem"
      },
      maxWidth: {
        100: "100px"
      },
      ringWidth: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem"
      },
      spacing: {
        1: "0.0625rem",
        2: "0.125rem",
        3: "0.1875rem",
        4: "0.25rem",
        5: "0.3125rem",
        6: "0.375rem",
        8: "0.5rem",
        10: "0.625rem",
        11: "0.6875rem",
        12: "0.75rem",
        13: "0.8125rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        22: "1.375rem",
        24: "1.5rem",
        25: "1.5625rem",
        26: "1.625rem",
        28: "1.75rem",
        30: "1.875rem",
        32: "2rem",
        34: "2.125rem",
        36: "2.25rem",
        38: "2.375rem",
        40: "2.5rem",
        42: "2.625rem",
        44: "2.75rem",
        46: "2.875rem",
        48: "3rem",
        50: "3.125rem",
        52: "3.25rem",
        56: "3.5rem",
        58: "3.625rem",
        60: "3.75rem",
        64: "4rem",
        68: "4.25rem",
        70: "4.375rem",
        72: "4.5rem",
        74: "4.625rem",
        80: "5rem",
        84: "5.25rem",
        90: "5.625rem",
        92: "5.75rem",
        96: "6rem",
        100: "6.25rem",
        120: "7.5rem",
        180: "11.25rem",
        190: "11.875rem",
        200: "12.5rem",
        220: "13.75rem",
        240: "15rem",
        250: "15.625rem",
        260: "16.25rem",
        270: "16.875rem",
        280: "17.5rem",
        300: "18.75rem",
        320: "20rem",
        400: "25rem",
        450: "28.125rem",
        520: "32.5rem"
      },
      keyframes: {
        close: {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.9)" }
        },
        hide: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        open: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" }
        },
        show: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/line-clamp")]
}
