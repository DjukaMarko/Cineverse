const FONT = {
    regular: "MSRegular",
    bold: "MSBold",
}

const COLORS = (isDark) => (
    
    ({
        primary: isDark ? "#484848" : "#F7F7F7",
        secondary: isDark ? "#F7F7F7" : "#484848",
        tertiary: "#BFBFBF",
    
        primary_second: isDark ? "#444444" : "#F2F2F2",
        primary_third: isDark ? "#444444" : "#F0F0F0",
    
        secondary_second: isDark ? "#F7F7F7" : "#444444",

        
    })
)


export {FONT, COLORS}