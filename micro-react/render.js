function render(element, container) {
    // 创建元素
    const dom =
        element.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(element.type);
    // 追加到父节点
    container.append(dom);
}

export default render;
