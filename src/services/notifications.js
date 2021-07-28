import toastr from "toastr";
import "toastr/build/toastr.min.css";

const isError = (text) => {
  toastr.error(text)
};
const isOk = (text) => {
    toastr.success(text);
}
const loading = (text) => {
  toastr.options = {
    "timeOut": "0"
  }
  toastr.info(text);
  toastr.options = {
    "timeOut": "5000"
  }
}
const clear = () => {
  toastr.clear();
}

export default {isError, isOk, loading, clear};