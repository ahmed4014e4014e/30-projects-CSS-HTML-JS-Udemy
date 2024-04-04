const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");


accordionItemHeaders.forEach(function(accordionItemHeader) {

    accordionItemHeader.addEventListener("click", function() {
        accordionItemHeader.classList.toggle("active");

        const accordionItemBody = accordionItemHeader.nextElementSibling;
    
        accordionItemHeader.classList.contains("active")? (accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"): accordionItemBody.style.maxHeight = 0;
    });

});