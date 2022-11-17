import { createApp } from 'vue'
import App from './App.vue'
import './public-path'

let instance;

function render(props) {
  const { container } = props;
  instance = createApp(App);
  instance.mount(
      container instanceof Element
        ? container.querySelector("#app")
        : container
    );
}
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render({ container: "#app" });
}
//暴露主应用生命周期钩子
export async function bootstrap() {
  console.log("subapp bootstraped");
}

export async function mount(props) {
  console.log("mount subapp");
  render(props);
}

export async function unmount() {
  console.log("unmount college app");
  instance.unmount();
}