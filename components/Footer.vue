<template>
  <footer class="footer">
    <div class="btn btn--list">
      <svg
        class="btn__ico"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <g fill="none">
          <path d="M0 0h24v24H0V0z" />
          <path d="M0 0h24v24H0V0z" opacity=".87" />
        </g>
        <path
          d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
        />
      </svg>
    </div>
    <div class="footer__controls">
      <div class="btn btn--prev">
        <svg
          class="btn__ico"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"
          />
        </svg>
      </div>
      <div class="btn btn--play">
        <svg
          class="btn__ico"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z" />
        </svg>
      </div>
      <div class="btn btn--next">
        <svg
          class="btn__ico"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"
          />
        </svg>
      </div>
    </div>
    <div class="btn btn--volume">
      <svg
        class="btn__ico"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"
        />
      </svg>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  background: #445a64;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2%), 0 0 10px rgba(0, 0, 0, 0.24%);
  justify-content: space-between;
  &__controls {
    display: flex;
    align-items: start;
  }
}
.btn__ico {
  fill: #fff;
}
.btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
