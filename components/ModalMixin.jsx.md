

<!-- Start components/ModalMixin.jsx -->

# [ModalMixin.jsx](ModalMixin.jsx)

This mixin supports bootstrap modal events and provides a hide function

## componentWillUnmount()

hide the window automatically on unmount

## componentDidMount()

if window is mounted append the backdrop to the parent element to make sure
backdrop will unmount as soon as window unmounts

## hide(cb)

hide function for hiding the modal manually

### Params:

* **Function** *cb* provide a function executed after window is hidden

<!-- End components/ModalMixin.jsx -->

