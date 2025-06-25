console.log(this);              // window or undefined

function abc() {
    console.log(this);          // window or undefined
}

const normal = function () {
    console.log(this);          // window or undefined
};

const arrow = () => {
    console.log(this);          // window or undefined
};

(function a() {
    console.log(this);          // window or undefined
})();

(function () {
    console.log(this);          // window or undefined
})();

abc();
normal();
arrow();

const obj = {
    a: "10",
    methodKey: function () {
        console.log("methodKey : ", this);      // obj
        function outer() {
            console.log("outer : ", this);      // window
        }

        const ancestor = () => {
            console.log("ancestor : ", this);   // obj
        };
        outer();
        ancestor();
    },
    method() {
        console.log("method : ", this);     // obj
    },
    methodArrow: () => {
        console.log("methodArrow : ", this);       // window or undefined
        const aaa = () => {
            console.log("aaa : ", this);            // window or undefined
        };
        function apple() {
            console.log("apple : ", this);          // window or undefined
        }
        apple();
        aaa();
    },
};

// NOTE: JAHA PE BHI STANDALONE ( MATLAB JO KISI OBJECT KA KEY NA HO ) FUNCTION AAYA MATLAB BHAYA USKE ANDAR KA THIS HOGA UNDEFINED YA WINDOW

obj.methodKey();
obj.method();
obj.methodArrow();


const obj2 = {
    a: "10",
    methodKey: function () {
        console.log(this);  // obj2
        (function () {
            console.log('iife :', this);  // undefined
        })();

        function sample() {
            console.log("sample : ", this); // undefined
        }

        const arrr = () => {
            console.log("arrr : ", this);   // obj2
        };
        sample();
        arrr();
    },
    mehtodArrow: () => {
        console.log("mehtodArrow : ", this);    // undefined
        function kakak() {
            console.log("kakak : ", this);      // undefined
        }
        kakak();
    },
};

obj2.methodKey();
obj2.mehtodArrow();