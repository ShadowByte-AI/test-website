
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        // Function to traverse shadow DOM
        function getShadowElement(selector) {
            const elements = document.querySelectorAll('*');
            for (let element of elements) {
                if (element.shadowRoot) {
                    let shadowElement = element.shadowRoot.querySelector(selector);
                    if (shadowElement) {
                        return shadowElement;
                    }
                }
            }
            return null;
        }

        var logoElement = getShadowElement("#logo");
        console.log(logoElement);
        if (logoElement) {
            logoElement.remove();
            console.log("Logo Element Removed");
        } else {
            console.log("Logo Element Not Removed");
        }
    }, 1000); // 10000 milliseconds = 10 seconds
});

