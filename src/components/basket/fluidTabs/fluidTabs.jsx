import React,{useState} from "react";
import "./fluidTabs.scss";
import cart from "./img/cart.svg";
import qrCode from "./img/qrcode.svg";
import home from "./img/home.svg";
import profile from "./img/profile.svg";

const FluidTabs = () => {
    const [check,setCheck]=useState(2);
  return (
    <div className="phone">
      <input type="radio" name="s" id="s1" checked={check==1?true:false}/>
      <input type="radio" name="s" id="s2" checked={check==2?true:false} />
      <input type="radio" name="s" id="s3" checked={check==3?true:false}/>
      <input type="radio" name="s" id="s4" checked={check==4?true:false}/>
      <label for="s1" onClick={()=>setCheck(1)}>
        <svg
          className="svg"
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2075 22.6662H16.5409C16.353 22.6662 16.1728 22.5916 16.04 22.4588C15.9071 22.3259 15.8325 22.1458 15.8325 21.9579V16.2912C15.8325 16.1034 15.7579 15.9232 15.6251 15.7904C15.4922 15.6575 15.312 15.5829 15.1242 15.5829H10.8742C10.6863 15.5829 10.5062 15.6575 10.3733 15.7904C10.2405 15.9232 10.1659 16.1034 10.1659 16.2912V21.9579C10.1659 22.1458 10.0912 22.3259 9.95839 22.4588C9.82555 22.5916 9.64538 22.6662 9.45752 22.6662H3.79085C3.60299 22.6662 3.42282 22.5916 3.28999 22.4588C3.15715 22.3259 3.08252 22.1458 3.08252 21.9579V13.7678C3.16132 13.7142 3.25296 13.6841 3.32468 13.6195L12.9992 5.09071L22.683 13.6306C22.7512 13.6917 22.8406 13.7191 22.9159 13.7722V21.9579C22.9159 22.1458 22.8412 22.3259 22.7084 22.4588C22.5756 22.5916 22.3954 22.6662 22.2075 22.6662Z"
            fill="black"
          />
          <path
            d="M23.6212 12.5672L13.469 3.6125C13.3396 3.49833 13.173 3.43534 13.0004 3.43534C12.8279 3.43534 12.6612 3.49833 12.5318 3.6125L2.37965 12.5676C2.23991 12.6931 2.05606 12.7579 1.86852 12.7479C1.68098 12.7378 1.50511 12.6537 1.37957 12.514L0.431289 11.4608C0.305813 11.3211 0.24097 11.1372 0.251015 10.9497C0.26106 10.7622 0.345172 10.5863 0.484857 10.4608L11.8182 0.455544C12.1425 0.16234 12.5641 0 13.0013 0C13.4385 0 13.8602 0.16234 14.1845 0.455544L18.6664 4.41203V2.12455C18.6664 1.93669 18.7411 1.75653 18.8739 1.62369C19.0067 1.49085 19.1869 1.41622 19.3748 1.41622H22.2081C22.396 1.41622 22.5761 1.49085 22.709 1.62369C22.8418 1.75653 22.9164 1.93669 22.9164 2.12455V8.16442L25.5147 10.459C25.6544 10.5845 25.7386 10.7603 25.7488 10.9478C25.7589 11.1354 25.6941 11.3193 25.5687 11.4591L24.6213 12.5136C24.4958 12.6533 24.3199 12.7374 24.1324 12.7474C23.9448 12.7575 23.761 12.6926 23.6212 12.5672Z"
            fill="black"
          />
        </svg>
      </label>
      <label for="s2" onClick={()=>setCheck(2)}>
        <svg
          className="svg"
          width="26"
          height="23"
          viewBox="0 0 26 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6871 3.14583H6.6374L6.25109 1.171C6.15352 0.672333 5.71647 0.3125 5.20833 0.3125H0.78125C0.487867 0.3125 0.25 0.550367 0.25 0.84375V1.90625C0.25 2.19963 0.487867 2.4375 0.78125 2.4375H4.33354L7.41453 18.1847C6.92586 18.6938 6.625 19.3845 6.625 20.1458C6.625 21.7106 7.89354 22.9792 9.45833 22.9792C11.0231 22.9792 12.2917 21.7106 12.2917 20.1458C12.2922 19.6484 12.1611 19.1596 11.9117 18.7292H18.3384C18.0889 19.1596 17.9578 19.6484 17.9584 20.1458C17.9584 21.7106 19.2269 22.9792 20.7917 22.9792C22.3565 22.9792 23.625 21.7106 23.625 20.1458C23.625 19.3429 23.2905 18.6187 22.754 18.1031L22.7998 17.8925C22.9438 17.2302 22.4393 16.6042 21.7616 16.6042H9.27062L8.85492 14.4792H22.6854C23.1852 14.4792 23.6174 14.1308 23.7236 13.6424L25.7253 4.43403C25.8693 3.77178 25.3648 3.14583 24.6871 3.14583ZM9.45833 21.2083C8.87245 21.2083 8.39583 20.7317 8.39583 20.1458C8.39583 19.56 8.87245 19.0833 9.45833 19.0833C10.0442 19.0833 10.5208 19.56 10.5208 20.1458C10.5208 20.7317 10.0442 21.2083 9.45833 21.2083ZM20.7917 21.2083C20.2058 21.2083 19.7292 20.7317 19.7292 20.1458C19.7292 19.56 20.2058 19.0833 20.7917 19.0833C21.3775 19.0833 21.8542 19.56 21.8542 20.1458C21.8542 20.7317 21.3775 21.2083 20.7917 21.2083ZM21.8293 12.3542H8.43922L7.0531 5.27083H23.369L21.8293 12.3542Z"
            fill="black"
          />
        </svg>
      </label>
      <label for="s3" onClick={()=>setCheck(3)}>
        <svg
          className="svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.09091 0H2.36364C1.05773 0 0 1.05773 0 2.36364V7.09091C0 8.39682 1.05773 9.45455 2.36364 9.45455H7.09091C8.39682 9.45455 9.45455 8.39682 9.45455 7.09091V2.36364C9.45455 1.05773 8.39682 0 7.09091 0ZM7.0909 7.09092H2.36363V2.36365H7.0909V7.09092ZM3.54546 5.90911H5.90909V3.54547H3.54546V5.90911Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.09091 16.5455H2.36364C1.05773 16.5455 0 17.6032 0 18.9091V23.6364C0 24.9423 1.05773 26 2.36364 26H7.09091C8.39682 26 9.45455 24.9423 9.45455 23.6364V18.9091C9.45455 17.6032 8.39682 16.5455 7.09091 16.5455ZM7.0909 23.6364H2.36363V18.9091H7.0909V23.6364ZM3.54546 22.4546H5.90909V20.0909H3.54546V22.4546Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.6364 0H18.9091C17.6032 0 16.5455 1.05773 16.5455 2.36364V7.09091C16.5455 8.39682 17.6032 9.45455 18.9091 9.45455H23.6364C24.9423 9.45455 26 8.39682 26 7.09091V2.36364C26 1.05773 24.9423 0 23.6364 0ZM23.6364 7.09092H18.9091V2.36365H23.6364V7.09092ZM20.0909 5.90911H22.4546V3.54547H20.0909V5.90911Z"
            fill="black"
          />
          <rect
            x="11.8182"
            y="2.36365"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="11.8182"
            y="7.09088"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="11.8182"
            y="11.8182"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="7.09094"
            y="11.8182"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="2.36365"
            y="11.8182"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="16.5455"
            y="11.8182"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="21.2727"
            y="11.8182"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="14.1818"
            y="14.1818"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="18.9091"
            y="14.1818"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="16.5455"
            y="16.5455"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="11.8182"
            y="16.5455"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="14.1818"
            y="18.9091"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="16.5455"
            y="21.2727"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="14.1818"
            y="23.6364"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="23.6364"
            y="14.1818"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="23.6364"
            y="18.9091"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="18.9091"
            y="18.9091"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="18.9091"
            y="23.6364"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="21.2727"
            y="21.2727"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="21.2727"
            y="16.5455"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
          <rect
            x="11.8182"
            y="21.2727"
            width="2.36364"
            height="2.36364"
            fill="black"
          />
        </svg>
      </label>
      <label for="s4" className="labelS4" onClick={()=>setCheck(4)}>
        <svg
          className="svg"
          width="22"
          height="25"
          viewBox="0 0 22 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.25 14.7321C13.8887 14.7321 13.2341 15.4911 11 15.4911C8.7659 15.4911 8.11607 14.7321 6.75 14.7321C3.23047 14.7321 0.375 17.5876 0.375 21.1071V22.3214C0.375 23.5784 1.39481 24.5982 2.65179 24.5982H19.3482C20.6052 24.5982 21.625 23.5784 21.625 22.3214V21.1071C21.625 17.5876 18.7695 14.7321 15.25 14.7321ZM19.3482 22.3214H2.65179V21.1071C2.65179 18.8493 4.49219 17.0089 6.75 17.0089C7.44252 17.0089 8.56669 17.7679 11 17.7679C13.4523 17.7679 14.5527 17.0089 15.25 17.0089C17.5078 17.0089 19.3482 18.8493 19.3482 21.1071V22.3214ZM11 13.9732C14.7709 13.9732 17.8304 10.9138 17.8304 7.14286C17.8304 3.37193 14.7709 0.3125 11 0.3125C7.22907 0.3125 4.16964 3.37193 4.16964 7.14286C4.16964 10.9138 7.22907 13.9732 11 13.9732ZM11 2.58929C13.5092 2.58929 15.5536 4.63365 15.5536 7.14286C15.5536 9.65207 13.5092 11.6964 11 11.6964C8.49079 11.6964 6.44643 9.65207 6.44643 7.14286C6.44643 4.63365 8.49079 2.58929 11 2.58929Z"
            fill="black"
          />
        </svg>
      </label>

      <div className="circle"></div>
      <div className="phone_content">
        <div className="phone_bottom">
          <span className="indicator"></span>
        </div>
      </div>
    </div>
  );
};
export default FluidTabs;
