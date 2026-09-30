const variants = {
  "aira-1": {
    img: "aira-1.webp",
    primary: "hsl(41, 93%, 73%)",
    secondary: "hsl(324, 49%, 80%)",
    shade: "hsl(41, 39%, 26%, 39%)",
  },
  "aira-2": {
    img: "aira-2.webp",
    primary: "hsl(0, 86%, 67%)",
    secondary: "hsl(214, 100%, 75%)",
    shade: "hsl(360, 43%, 24%, 39%)",
  },
  "granny-1": {
    img: "granny-1.webp",
    primary: "hsl(176, 93%, 58%)",
    secondary: "hsl(270, 36%, 70%)",
    shade: "hsl(177, 72%, 20%, 39%)",
  },
  "granny-2": {
    img: "granny-2.webp",
    primary: "hsl(176, 93%, 58%)",
    secondary: "hsl(6, 93%, 70%)",
    shade: "hsl(177, 72%, 20%, 39%)",
  },
  "jiji-1": {
    img: "jiji-1.webp",
    primary: "hsl(235, 59%, 33%)",
    secondary: "hsl(5, 78%, 74%)",
    shade: "hsl(236, 79%, 9%, 39%)",
  },
  "momo-1": {
    img: "momo-1.webp",
    primary: "hsl(261, 81%, 43%)",
    secondary: "hsl(163, 66%, 47%)",
    shade: "hsl(261, 98%, 14%, 39%)",
  },
  "momo-2": {
    img: "momo-2.webp",
    primary: "hsl(190, 47%, 44%)",
    secondary: "hsl(316, 45%, 67%)",
    shade: "hsl(191, 58%, 14%, 39%)",
  },
  "okarun-1": {
    img: "okarun-1.webp",
    primary: "hsl(21, 93%, 52%)",
    secondary: "hsl(243, 17%, 70%)",
    shade: "hsl(21, 97%, 17%, 39%)",
  },
  "okarun-2": {
    img: "okarun-2.webp",
    primary: "hsl(230, 59%, 40%)",
    secondary: "hsl(348, 50%, 73%)",
    shade: "hsl(230, 76%, 12%, 39%)",
  },
  "okarun-3": {
    img: "okarun-3.webp",
    primary: "hsl(172, 68%, 67%)",
    secondary: "hsl(294, 50%, 75%)",
    shade: "hsl(173, 34%, 23%, 39%)",
  },
  "seiko-1": {
    img: "seiko-1.webp",
    primary: "hsl(195, 61%, 26%)",
    secondary: "hsl(23, 59%, 65%)",
    shade: "hsl(196, 86%, 7%, 39%)",
  },
  "seiko-2": {
    img: "seiko-2.webp",
    primary: "hsl(89, 93%, 76%)",
    secondary: "hsl(131, 52%, 70%)",
    shade: "hsl(90, 35%, 27%, 39%)",
  },
}

function getRandomVariant() {
  const list = Object.keys(variants)
  const min = 0
  const max = list.length - 1

  const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min
  return list[randomIndex]
}

const pinAction = document.getElementById("pin-action")
const pinStoreKey = "dandadan-spg/pinned"

function getPinned() {
  return localStorage.getItem(pinStoreKey)
}

function setPinned(variant) {
  const label = pinAction.querySelector("&>span.visually-hidden")
  const icon = pinAction.querySelector("&>svg")

  if (!variant) {
    localStorage.removeItem(pinStoreKey)
    pinAction.ariaChecked = "false"
    icon.style.fill = "transparent"
    pinAction.title = "Pin variant"
    label.innerText = "Pin variant"
  } else {
    localStorage.setItem(pinStoreKey, variant)
    pinAction.ariaChecked = "true"
    icon.style.fill = "currentColor"
    pinAction.title = "Unpin variant"
    label.innerText = "Unpin variant"
  }
}

if (getPinned()) {
  setPinned(getPinned())
}

export function updateVariant(variant) {
  const variantId = variant ?? getPinned() ?? getRandomVariant()

  pinAction.addEventListener("click", ({ target }) => {
    if (target.ariaChecked === "true") {
      setPinned(null)
    } else {
      setPinned(variantId)
    }
  })

  const current = variants[variantId]

  const img = document.getElementById("character")
  img.src = `./images/${current.img}`

  const root = document.documentElement
  root.style.setProperty("--primary", current.primary)
  root.style.setProperty("--secondary", current.secondary)
  root.style.setProperty("--shade-color", current.shade)
}
