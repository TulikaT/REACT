import React from 'react'

function Card({username,some,someobj, namy="default"}) {
  console.log(username, some, someobj, namy)
  return (
    <div>
     <div
  class="block rounded-lg bg-stone-950 shadow-secondary-1 dark:bg-surface-dark p-6">
  <div
    class="relative overflow-hidden bg-cover bg-no-repeat"
    data-twe-ripple-init
    data-twe-ripple-color="light">
    <img
      class="rounded-t-lg m-auto"
      src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
      alt="" />
    <a href="#!">
      <div
        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-20 transition duration-300 ease-in-out hover:opacity-100"></div>
    </a>
  </div>
  <div class="p-6 text-surface dark:text-amber-500">
    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
    <p class="mb-4 text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
      data-twe-ripple-init
      data-twe-ripple-color="light">
      Button
    </button>
  </div>
</div>
    </div>
  )
}

export default Card