# Pet Animals Project:-

## Primary Todo List:-


- [x] Download all custom fonts and centralize them.
- [ ] Add all the assets like `images`, `fonts`, `icons` inside the _app/assets_ folder
- [x] Centralize all colors and themes


## Contribution Guide:-

- All the codes/folders will be created inside the `app` folder from the root directory
- All the assets should be kept inside the `app/assets` folder according to their categories
- Different types of pages will be places inside the `pages` folder whereas the `components` folder will have all the components that are used in those pages

## Rules:-

Before making the commit to the repo it should be tested and verified by all three members.

All the colors, gradients, fontSize & fontWeight that are used in this project are centralized and listed out in the `app/assets/constants` folder. Use these to apply colors and font styles to all the components and screens.

## Members:-

- Kishore
- Vengadesh
- Krishna

## How to contribute:-

Follow the following steps carefully to contribute to this project

- ### Fork the Project:-

  - Go to the [Project Repository](https://github.com/kishore007k/pet_animals) and click on the `fork` on the top right corner of the Repository.
  - This will fork the Project to your local Repository from there click on the `code` dropdown box and click on the _Open with GitHUb Desktop_
  - This will open the `GitHub Desktop` application on your PC/Laptop and prompt you with a cloning location.
  - Change the location to your desired location if you want or leave it be.
  - If the `GitHub Desktop` prompt you with a screen saying contribute to your own purpose or contribute to the parent Repo choose **Contribute to the parent Repo**
  - Once the cloning is done click on the `Open in ${Your text editor}` in my case **Open in visual Studio Code**
  - This will open the cloned repository inside the VSCode.

- ### Git Commands to Commit the changes:-

  **Never push your changes directly to the master branch**

Follow the following steps carefully to contribute or make changes to the Project:

1. `git checkout development`
1. `git checkout -b <Your branch name>` This will create a new branch with your name. For example I will create a branch like **git checkout -b kishore:feature**
1. Once you made all the changes give the following commands
1. `git add .` This will add all the current changes to the stash.
1. `git commit -s -m "Your message"` Instead of the _your message_ type your commit message
1. `git push origin <your branch name>`

- ### PR (Pull Request):-

1. Once the changes are pushed to your local Repo open your GitHub Repo, You will see a prompt saying `create Pull Request`
1. click on that and you will be redirected to a new page with a window showing something like [this](https://storage.googleapis.com/cdn.thenewstack.io/media/2018/06/bd933597-propen.png) In that choose the base fork as kishore/pet_animals and base as development and in the head fork choose the branch you created and in the compare choose the branch you created.
1. Inside the `Leave the comment` Explain the changes/features that you added.
1. Then click on the `create pull request`

### Using Custom Fonts:-

To use the custom fonts import the fonts from `app/assets/constants/fonts.js` file and give

```js
fontFamily: fonts.fontFamily.openSansRegular,
```

This will give the fontFamily as OpenSans with regular Size to that element. Similarly to add colors give

```js
color: colors.primary,
```
