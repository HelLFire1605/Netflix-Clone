import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",window);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="Netflix -logo"
      />
      <img
        className="nav__avatar"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAABBVBMVEX///892/+vl9qTqOOZpOH2a8Kdod+Nq+Wjnt5fwfJF1vx9teqTpeLrcsX4asFrv/BbyfVEzvn5//91t+xque37+/6/jdTHiNLNhNDybcPY8/1My/eDseiom9yvktjf5PbUgM3afcv48PnS2fL83fD5XLzw9v3X7Pri+f/H8/+o7P+b5/65kdecreTj1e/YuOPHyezs6ffcc8ey5PrRwOezvOj4xeXijdDqsN6J4v1v2ft0z/aV2PfF6vui0/R/wO+lyvDK4PaXvevB0fCuq+K3o95y4/+th9TOruHkyurNotuz2vXZmNbPdcr95/TBt+XeZsPrhc30ldLtpdn6sdz7otb7h8y4ogfcAAAHuUlEQVR4nO2aaVfiShCGkTUiYTVAULaAAZRdybgxiAuKKO7+/59yqwI4LqmmE2DmnHvynvmgE5I8VlXX0o3DYcuWLVu2bNmy9b9WNFoup0BlNfoP3l6u7B4dR0BboDDo5HS/q/7F1x/5QZHPBKD19fXQ79JfwIhWBn4/QQAMIaCQVgpQ3lvzzwiOT3e7XQyFVKnbHZ2GJwSbm5u90epCozxYmxIc7ad+vqY0+o0Em7FY7Gw1/igfrekEx3sGr5+p/7sXQ22sACK6u6YTHFfmPFvt92IboO3+kmMiNdAJjlI8H+73EGH7fKmG2EOAtUGZ9/Ol823UxdIAyroJ1ipm7ukDgc/XWZIhUjrAnsmVpp77QLXsMggq5k0w0QUguAJLYNjXo8BSsmn5Ai5XoLAogb4W9yzeLHUCroB7QQadYNf6/R232+1diKFiMQz+qOl1e4UF4iG1MAEwCN4FGMoLemGijlcQBMXizYO5BGqpPxr12X2KdCkI6UtrBFgZjxiP7p5O+gO9OjOKkiSk0+kDKwR6KJJX1VEIO5TQhABr4wUJ0QKEjIVwiKIbyLrUDU17pF6vN0XY2OhTn26mnc4r87V7jxEI0VMdIPQbwgBU6p9hcd7ePqOS6JXTmRmaJcD1OKAITrBVPfnyR/f18uwj/lTFCQwtkwgMN6hIEPreo0oXUJx9VJtSzzgzN+YIUnRl0G0QKhmgYXXuGNtBcmaqVXNmGNCrAeJgvWfodLUG1bljfFf9ulo1ZQbIi34iFrsYiYS5VZ+LbBCc1WrcTI7EiYWIbvQCmQ1bUJxrxpfqgNDgJ1CBgMiLXbDBiL6zGSD7g2o8bsIMuzCxGC8HqQcIjDulmtt9aRyRw3g8wZ8bBqQRSkBAJkFUAfoD48hXwAq3vARlMALRJYxCZCxOpHq93qbxpZt4IsHrCfQDEYw9yMrsmzteL1GZ68lEktcTtB9UqEyMYEQ1oUMxtpOUTCTu+AiiYAQiKZQAwSAvflY2LQhEGrxNJJN8CBW/P0KUhxK0B/Mma+iRiOw0TCaTYy4EDAXiEg9CmkQoJpM5vmA48keOaYTYXIQ0hSABwiEXwnEkQo1PJejS5sQCdmlUSQQErniMRiKRLoUAPRozM0FuSqedFMJdLpfjQSgDArWZokKjeMa+/SFNt4mHudw9TwuZAgSybT2LbZwzHyJBm0j2BcP7XJsnP1YikRMy5PrQKzPb8RZ0aHXqYvE+3+ZZlfuRrRNyO0GFXv2MdfcD9KnkH1oHhCIHQndr65je0cB2nbEmskDwQF4t5vNtnsSwz0QoQat+Tt8MkXBNd6mIoPEh0I4AM7A28w7Yvfq4nX/ks0KYhaDixEJEJEwLjEgAHT7+4iBw7IeZCI4+jiyG/aFOQC4HE+oCArMO4Gaer/kjO0jgBee1pSH+u1LhcJi903uB+4nfNzWzV0sjcKjh8Pqc3e4m7icGaoUPY6l1BFgWgSMKVqDK1EzZGswLbuhUO03QAyxFHJ2dy4gDXSfh9Tn9IeThmltHEATcxUnrBFdW97R+CubWU/Ynsp2pEaYE6YkVrg6WdQqyD1Mj63pB94IbAaBVxddnrjOgarV6fbMcS8DsvE6vyhYABAJeb63TzKrSVErr4OYKxneYGxsMS4z5mlcIb7ACGY8FXAxudyf7A1Jq3cDIFk/EyaDURJmnQqBC5MiEW+uugLdJGElpJICBHJmeRPmZEwEHR0NzqjXc3Cf2ciYQt4lEImk8vSoeUX7lRKBmpgkBew9TGgJC8taIUvHIHp6GRX9Mb3PTwBNqDXPi3D2repIaF4rPvKEAnjCcWPCIpcZx5NYChnsTezqGUmFi+ZEgoTAEXFy5R4FxgXNyo3UWi/W+vS2LccB57DgGhPyCmdJgaoJA4D/oauTzeb7pkRaeOn/5D0hJAWJX00h3eb6JgaH+t719CdIyTyjONAYErjaRofON7e1PryzQ+4nGOmy3FzYDHi/8+RWLo6n4UgDhZTEEfV74SITZgJvayqP00m6LH9BaULZQxXFeqM2e0YT2wOT3AIqPbXGWG8ZBzw5vdfisPp4uTH+GNs1r9n6wwswT74DAn5s/6fxjZIl6TfvB4XgWRXHy09uOJ/huhUA/ZZmcLmShTTR99q2Joqw7UgOCoMWGLutzuWpYGQvQJ5o93HIURdGDy1ILAgFvkf6hwrQ2NsEKpr+VMhb1Pq0IBJZicaomdKpQm/Dk2/S9iih7NEcRvLDzZp1g8hUId6sjWECQEEG3AW/DSDKAEy4FwfSadEiyLL97kGDRAaczHZosISDB++IjVlNAgivzCKJOsKAXZgw4NpqemjWPZ7G18FktYHBmHkxlF+U5CARBS2nZ8Hm4gZHJmNjAeAUTeHbkBTuGLxo6EeK6zhVaEvhAXp4TZlIecHq/rjbmukN5FT2wFnbeLSdlUnXnZHq/YZqi+CwDgBz0LC0KvkLgsTOMzonG0NAWY+1F1hUMvq7sm8j1W5zecXBNvgzr47EiOST4p4yLQw37A1nUXaCt8qvQUqsxRUji1PZL19PTU/tR1CV7xOfiar+LjRT1xowgl0e1deH7ZflNW962G1ut4eFd7v4+3/54/6P49KYtfw2wBREw1LRDlKYVlZVb35YtW7Zs2bJl61/qPz8j7QiYDTqCAAAAAElFTkSuQmCC"
        alt="login__logo"
      />
    </div>
  );
}

export default Nav;
