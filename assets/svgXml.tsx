// symtem import
import React from "react";
import { View } from "react-native";

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import clrStyle from "./componentStyleSheet";
import styles from "./stylesheet";

// ____________________END OF IMPORT_______________________

export const searchIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_367_83)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_367_83">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const shareIcon = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_62_4141)">
    <path d="M16.4 21.2788L11.1513 18.4162C10.466 19.1488 9.57624 19.6584 8.5976 19.8786C7.61896 20.0989 6.5967 20.0197 5.66366 19.6513C4.73063 19.2829 3.92996 18.6424 3.36572 17.8131C2.80148 16.9837 2.49976 16.0037 2.49976 15.0006C2.49976 13.9975 2.80148 13.0176 3.36572 12.1882C3.92996 11.3588 4.73063 10.7183 5.66366 10.35C6.5967 9.98159 7.61896 9.90239 8.5976 10.1226C9.57624 10.3429 10.466 10.8524 11.1513 11.585L16.4013 8.7225C16.1032 7.54259 16.2457 6.29449 16.8021 5.21213C17.3584 4.12977 18.2904 3.28748 19.4233 2.84313C20.5563 2.39878 21.8124 2.38288 22.9562 2.79842C24.1001 3.21395 25.0531 4.0324 25.6366 5.10033C26.2202 6.16826 26.3942 7.41236 26.1261 8.59943C25.858 9.7865 25.1662 10.835 24.1803 11.5485C23.1944 12.262 21.9822 12.5914 20.7708 12.475C19.5594 12.3586 18.432 11.8044 17.6 10.9162L12.35 13.7787C12.5515 14.5804 12.5515 15.4196 12.35 16.2212L17.5988 19.0837C18.4308 18.1956 19.5581 17.6414 20.7695 17.525C21.9809 17.4086 23.1932 17.738 24.1791 18.4515C25.1649 19.165 25.8568 20.2135 26.1249 21.4006C26.393 22.5876 26.219 23.8317 25.6354 24.8997C25.0518 25.9676 24.0988 26.786 22.955 27.2016C21.8112 27.6171 20.555 27.6012 19.4221 27.1569C18.2891 26.7125 17.3572 25.8702 16.8008 24.7879C16.2445 23.7055 16.102 22.4574 16.4 21.2775V21.2788ZM7.50001 17.5C8.16305 17.5 8.79894 17.2366 9.26778 16.7678C9.73662 16.2989 10 15.663 10 15C10 14.337 9.73662 13.7011 9.26778 13.2322C8.79894 12.7634 8.16305 12.5 7.50001 12.5C6.83697 12.5 6.20109 12.7634 5.73225 13.2322C5.26341 13.7011 5.00001 14.337 5.00001 15C5.00001 15.663 5.26341 16.2989 5.73225 16.7678C6.20109 17.2366 6.83697 17.5 7.50001 17.5ZM21.25 10C21.9131 10 22.5489 9.73661 23.0178 9.26777C23.4866 8.79893 23.75 8.16304 23.75 7.5C23.75 6.83696 23.4866 6.20107 23.0178 5.73223C22.5489 5.26339 21.9131 5 21.25 5C20.587 5 19.9511 5.26339 19.4822 5.73223C19.0134 6.20107 18.75 6.83696 18.75 7.5C18.75 8.16304 19.0134 8.79893 19.4822 9.26777C19.9511 9.73661 20.587 10 21.25 10ZM21.25 25C21.9131 25 22.5489 24.7366 23.0178 24.2678C23.4866 23.7989 23.75 23.163 23.75 22.5C23.75 21.837 23.4866 21.2011 23.0178 20.7322C22.5489 20.2634 21.9131 20 21.25 20C20.587 20 19.9511 20.2634 19.4822 20.7322C19.0134 21.2011 18.75 21.837 18.75 22.5C18.75 23.163 19.0134 23.7989 19.4822 24.2678C19.9511 24.7366 20.587 25 21.25 25Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_62_4141">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const fbLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" transform="translate(0.5)" fill="none"/>
<path d="M24 12.0698C24 5.71857 18.8513 0.569849 12.5 0.569849C6.14872 0.569849 1 5.71857 1 12.0698C1 17.8098 5.20538 22.5674 10.7031 23.4301V15.3941H7.7832V12.0698H10.7031V9.53626C10.7031 6.65407 12.42 5.06204 15.0468 5.06204C16.305 5.06204 17.6211 5.28665 17.6211 5.28665V8.11672H16.171C14.7424 8.11672 14.2969 9.00319 14.2969 9.91263V12.0698H17.4863L16.9765 15.3941H14.2969V23.4301C19.7946 22.5674 24 17.8098 24 12.0698Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const googleLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="none"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z" fill="#4285F4"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8283C14.8645 18.5183 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z" fill="#34A853"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z" fill="#FBBC05"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z" fill="#EA4335"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const appleLogo = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="black"/>
<path d="M21.2806 18.424C20.9327 19.2275 20.521 19.9672 20.044 20.6472C19.3938 21.5743 18.8614 22.216 18.4511 22.5724C17.815 23.1573 17.1336 23.4568 16.4039 23.4739C15.88 23.4739 15.2482 23.3248 14.5128 23.0224C13.775 22.7214 13.0969 22.5724 12.4769 22.5724C11.8267 22.5724 11.1293 22.7214 10.3834 23.0224C9.63638 23.3248 9.03456 23.4824 8.57444 23.498C7.87466 23.5278 7.17716 23.2197 6.48093 22.5724C6.03656 22.1848 5.48075 21.5204 4.8149 20.5791C4.10051 19.5739 3.51317 18.4084 3.05304 17.0795C2.56026 15.6442 2.31323 14.2543 2.31323 12.9087C2.31323 11.3673 2.6463 10.0379 3.31342 8.92385C3.83772 8.029 4.53522 7.32312 5.4082 6.80493C6.28118 6.28674 7.22443 6.02267 8.24024 6.00578C8.79605 6.00578 9.52493 6.1777 10.4307 6.51559C11.3339 6.85462 11.9139 7.02655 12.1681 7.02655C12.3582 7.02655 13.0025 6.82552 14.0947 6.42473C15.1275 6.05305 15.9992 5.89916 16.7133 5.95978C18.6484 6.11595 20.1022 6.87876 21.069 8.25303C19.3384 9.30163 18.4823 10.7703 18.4993 12.6544C18.515 14.122 19.0474 15.3432 20.0937 16.3129C20.5679 16.7629 21.0974 17.1107 21.6866 17.3578C21.5588 17.7283 21.4239 18.0832 21.2806 18.424ZM16.8425 0.960131C16.8425 2.11039 16.4223 3.18439 15.5847 4.17847C14.5738 5.36023 13.3512 6.04311 12.0253 5.93536C12.0084 5.79736 11.9986 5.65213 11.9986 5.49951C11.9986 4.39526 12.4793 3.21349 13.333 2.24724C13.7592 1.75801 14.3013 1.35122 14.9586 1.02671C15.6145 0.707053 16.2349 0.530273 16.8184 0.5C16.8354 0.653772 16.8425 0.807554 16.8425 0.960116V0.960131Z" fill="white"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpLeftArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 4L7 12L15 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const sharpRightArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 20L17 12L9 4" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const curveRightArrow = (w: any = '100%', h: any = '100%', color: any = '#272727') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4L14.5858 10.5858C15.3668 11.3668 15.3668 12.6332 14.5858 13.4142L8 20" stroke=${color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

// search
export const xIcon = (w: any = '100%', h: any = '100%', color: any = "#808797") => {
    const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18C13.9235 18 18 13.9147 18 9C18 4.07647 13.9147 0 8.99118 0C4.07647 0 0 4.07647 0 9C0 13.9147 4.08529 18 9 18ZM5.88529 12.8471C5.48823 12.8471 5.16176 12.5118 5.16176 12.1059C5.16176 11.9118 5.24118 11.7353 5.37353 11.5941L7.95882 9.00882L5.37353 6.42353C5.24118 6.28235 5.16176 6.10588 5.16176 5.91176C5.16176 5.50588 5.48823 5.18824 5.88529 5.18824C6.09706 5.18824 6.26471 5.25882 6.39706 5.4L8.99118 7.98529L11.6118 5.39118C11.7618 5.24118 11.9206 5.17059 12.1147 5.17059C12.5118 5.17059 12.8382 5.49706 12.8382 5.89412C12.8382 6.09706 12.7765 6.25588 12.6265 6.41471L10.0324 9.00882L12.6176 11.5853C12.7588 11.7353 12.8294 11.9029 12.8294 12.1059C12.8294 12.5118 12.5029 12.8471 12.0971 12.8471C11.8941 12.8471 11.7176 12.7588 11.5765 12.6265L8.99118 10.0412L6.42353 12.6265C6.28235 12.7676 6.09706 12.8471 5.88529 12.8471Z" fill=${color}/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const adjustIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5L10 5M10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5M14 5L20 5M4 12L16 12M16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12ZM8 19L20 19M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const uniDetailPageHatIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="118" height="67" viewBox="0 0 118 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.5589 38.1422C99.5589 38.1422 99.5589 38.1422 99.5589 37.9158L99.7851 36.2181H99.5589C99.2195 32.0304 95.8253 27.5031 89.1504 23.3154C73.9903 13.8081 47.7431 9.95998 30.5466 14.7136C20.9302 17.43 16.1786 22.1836 16.6311 27.6163L15.1603 38.2554C13.237 43.3485 16.518 49.3472 25.1162 54.6667C40.2763 64.174 66.5236 68.0221 83.7201 63.2685C92.3184 60.8917 97.0698 56.8172 97.6355 52.0635L99.5589 38.029V38.1422Z" fill="#348AB8"/>
<path d="M99.5589 38.1422C99.5589 38.1422 99.5589 38.1422 99.5589 37.9158L99.7851 36.2181H99.5589C99.2195 32.0304 95.8253 27.5031 89.1504 23.3154C73.9903 13.8081 47.7431 9.95998 30.5466 14.7136C20.9302 17.43 16.1786 22.1836 16.6311 27.6163L15.1603 38.2554C13.237 43.3486 16.518 49.3472 25.1162 54.6667C40.2763 64.174 66.5236 68.0221 83.7201 63.2685C92.3184 60.8917 97.0698 56.8172 97.6355 52.0635L99.5589 38.029V38.1422Z" fill="#0B4B85"/>
<path d="M117.66 35.9918L55.436 51.9504L0 18.675L0.339391 15.9586L118 33.2754L117.66 35.9918Z" fill="#348AB8"/>
<path d="M117.66 35.9918L55.436 51.9504L0 18.675L0.339391 15.9586L118 33.2754L117.66 35.9918Z" fill="#1F6A9E"/>
<path d="M118 33.2754L55.8891 49.234L0.339844 15.9586L62.564 0L118 33.2754Z" fill="#348AB8"/>
<path d="M59.1696 24.5604C59.1696 24.5604 55.7757 25.6923 50.5715 27.1636C45.4804 28.7482 38.2397 30.1063 31.9041 32.4831C30.094 33.1622 29.9809 33.5018 29.3021 35.5391C28.6233 37.2368 28.0576 38.8213 27.3788 40.4059C26.1343 43.575 24.8899 46.4045 23.7586 48.8945C21.4959 53.7613 19.9119 57.0436 19.9119 57.0436C19.9119 57.0436 20.817 53.5349 22.2878 48.3286C23.0797 45.7254 23.9848 42.6695 25.1161 39.5004C25.6818 37.9159 26.2474 36.2181 26.8131 34.6336C27.2656 33.615 27.0394 33.2754 28.0576 31.8041C29.0758 30.7854 29.9809 30.4459 30.886 29.9932C38.0134 27.5032 45.0278 26.4845 50.3451 25.6922C55.6625 25.0132 59.2829 24.6736 59.2829 24.6736L59.1696 24.5604Z" fill="#C33E13"/>
<path d="M21.0435 53.9876C20.1384 53.6481 19.2334 55.7985 19.1203 57.1567C19.1203 57.1567 15.2737 62.1367 14.708 62.929C14.708 62.929 14.708 64.6267 17.197 66.3244C19.7991 68.0222 22.5143 65.9849 22.5143 65.9849L21.0435 57.7226C21.0435 57.7226 22.6274 54.7799 21.0435 54.1008V53.9876Z" fill="#C33E13"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const sharpXIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 5L5 19M5.00003 5L19 19" stroke="#3E3792" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const editIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9445 9.1875L14.9445 5.1875M18.9445 9.1875L13.946 14.1859C13.2873 14.8446 12.4878 15.3646 11.5699 15.5229C10.6431 15.6828 9.49294 15.736 8.94444 15.1875C8.39595 14.639 8.44915 13.4888 8.609 12.562C8.76731 11.6441 9.28735 10.8446 9.946 10.1859L14.9445 5.1875M18.9445 9.1875C18.9445 9.1875 21.9444 6.1875 19.9444 4.1875C17.9444 2.1875 14.9445 5.1875 14.9445 5.1875M20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12C3.5 5.5 5.5 3.5 12 3.5" stroke="#CCCED5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const infoIcon = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#CCCED5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const imgPickerIcon = (w: number, h: number, color?: any) => {
    const xml = `<svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1703 43.8297C14.0573 49.2885 19.8219 51.25 30 51.25C44.0637 51.25 49.7009 47.5049 50.9632 35.9633M11.1703 43.8297C9.44809 40.5731 8.75 36.0719 8.75 30C8.75 13.75 13.75 8.75 30 8.75C46.25 8.75 51.25 13.75 51.25 30C51.25 32.1863 51.1595 34.169 50.9632 35.9633M11.1703 43.8297L18.9645 36.0355C20.9171 34.0829 24.0829 34.0829 26.0355 36.0355L26.4645 36.4645C28.4171 38.4171 31.5829 38.4171 33.5355 36.4645L38.9645 31.0355C40.9171 29.0829 44.0829 29.0829 46.0355 31.0355L50.9632 35.9633M26.7275 22.115C26.7275 24.6625 24.66 26.73 22.1125 26.73C19.5675 26.73 17.5 24.6625 17.5 22.115C17.5 19.5675 19.5675 17.5 22.1125 17.5C24.66 17.5 26.7275 19.5675 26.7275 22.115Z" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const cameraIcon = (w: number, h: number, color?: any) => {
    const xml = `<svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1" y="1" width="42" height="42" rx="15" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
<circle cx="21.5" cy="21.5" r="15.5" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
<circle cx="21.5" cy="21.5" r="11.5" stroke="#A4A4A4" style="stroke:#A4A4A4;stroke:color(display-p3 0.6417 0.6417 0.6417);stroke-opacity:1;" stroke-width="2"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const bellIcon = (w: any = '100%', h: any = '100%', color?: string) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="${color ? color : 'none'}" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.02 2.91003C8.70997 2.91003 6.01997 5.60003 6.01997 8.91003V11.8C6.01997 12.41 5.75997 13.34 5.44997 13.86L4.29997 15.77C3.58997 16.95 4.07997 18.26 5.37997 18.7C9.68997 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"/>
    <path d="M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601" stroke=${color ? color : "#98A2B3"} stroke-width="1.5" stroke-miterlimit="10"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const calendar = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 2V5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 9.08997H20.5" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#98A2B3" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6947 13.7H15.7037" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6947 16.7H15.7037" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9955 13.7H12.0045" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9955 16.7H12.0045" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29431 13.7H8.30329" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29431 16.7H8.30329" stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const clock = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const eye = (w: any = '100%', h: any = '100%') => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42004 13.98 8.42004 12C8.42004 10.02 10.02 8.42004 12 8.42004C13.98 8.42004 15.58 10.02 15.58 12Z" stroke="#4E5BA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.39997C18.82 5.79997 15.53 3.71997 12 3.71997C8.46997 3.71997 5.17997 5.79997 2.88997 9.39997C1.98997 10.81 1.98997 13.18 2.88997 14.59C5.17997 18.19 8.46997 20.27 12 20.27Z" stroke="#4E5BA6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const save = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.89 5.88H5.10999C3.39999 5.88 2 7.27999 2 8.98999V20.35C2 21.8 3.04 22.42 4.31 21.71L8.23999 19.52C8.65999 19.29 9.34 19.29 9.75 19.52L13.68 21.71C14.95 22.42 15.99 21.8 15.99 20.35V8.98999C16 7.27999 14.6 5.88 12.89 5.88Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 8.98999V20.35C16 21.8 14.96 22.41 13.69 21.71L9.76001 19.52C9.34001 19.29 8.65999 19.29 8.23999 19.52L4.31 21.71C3.04 22.41 2 21.8 2 20.35V8.98999C2 7.27999 3.39999 5.88 5.10999 5.88H12.89C14.6 5.88 16 7.27999 16 8.98999Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 5.10999V16.47C22 17.92 20.96 18.53 19.69 17.83L16 15.77V8.98999C16 7.27999 14.6 5.88 12.89 5.88H8V5.10999C8 3.39999 9.39999 2 11.11 2H18.89C20.6 2 22 3.39999 22 5.10999Z" stroke="#98A2B3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const rightLongArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 12.5L18.5 12.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.5 7.5L19.5 12.5L14.5 17.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const leftLongArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12L6 12" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 17L5 12L10 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const createRecipe = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M15.4872 3H7.52225C4.06253 3 2 5.0615 2 8.5195V16.471C2 19.9385 4.06253 22 7.52225 22H15.4777C18.9374 22 21 19.9385 21 16.4805V8.5195C21.0095 5.0615 18.9469 3 15.4872 3Z" fill="#64721C"/>
<path d="M21.2591 2.57138C20.3591 1.67138 19.6491 1.96138 19.0391 2.57138L15.4991 6.11139C15.3591 6.25139 15.2291 6.51138 15.1991 6.70138L15.0091 8.05139C14.9391 8.54139 15.2791 8.88137 15.7691 8.81137L17.1191 8.62137C17.3091 8.59137 17.5791 8.46138 17.7091 8.32138L21.2491 4.78137C21.8691 4.18137 22.1591 3.47138 21.2591 2.57138Z" fill="black"/>
<path d="M10.75 13.5H5.75C5.34 13.5 5 13.16 5 12.75C5 12.34 5.34 12 5.75 12H10.75C11.16 12 11.5 12.34 11.5 12.75C11.5 13.16 11.16 13.5 10.75 13.5Z" fill="black"/>
<path d="M14.75 17.5H5.75C5.34 17.5 5 17.16 5 16.75C5 16.34 5.34 16 5.75 16H14.75C15.16 16 15.5 16.34 15.5 16.75C15.5 17.16 15.16 17.5 14.75 17.5Z" fill="black"/>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

export const downArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15.01C11.81 15.01 11.62 14.94 11.47 14.79L7.93997 11.26C7.64997 10.97 7.64997 10.49 7.93997 10.2C8.22997 9.91004 8.70997 9.91004 8.99997 10.2L12 13.2L15 10.2C15.29 9.91004 15.77 9.91004 16.06 10.2C16.35 10.49 16.35 10.97 16.06 11.26L12.53 14.79C12.38 14.94 12.19 15.01 12 15.01Z" fill="${color ? color : 'black'}"/>
</svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    )
}

// export const NAME = (w: any = '100%', h: any = '100%', color?:any) => {
//     const xml = ``
//     return (
//         <SvgXml xml={xml} width={w} height={h} />
//     )
// }
