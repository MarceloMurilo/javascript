
  document.querySelectorAll(".copy-linkf").forEach(copyLinkContainer => {
    const inputField = copyLinkContainer.querySelector(".copy-linkf-input");
    const copyButton = copyLinkContainer.querySelector(".copy-linkf-button");
    const text = inputField.value;

    inputField.addEventListener("focus", () => inputField.select());
   
    copyButton.addEventListener("click", () => {
       
        inputField.select();
        navigator.clipboard.writeText(text);
    })

    document.querySelectorAll(".copy-linkf").forEach(copyLinkContainer => {
        const inputField = copyLinkContainer.querySelector(".copy-linkf-input");
        const copyButton = copyLinkContainer.querySelector(".copy-linkf-button");
        const text = inputField.value;

        inputField.addEventListener("focus", () => inputField.select());
        copyButton.addEventListener("click", () => {
            const text = inputField.value;

            inputField.select();
            navigator.clipboard.writeText(text);
            
           
        })  })})