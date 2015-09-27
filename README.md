# OpenFight
Its clobberin' time!

## How to play
The following how-to is a suggestion only and creativity is encouraged when establishing the rules and boundaries of the game (if at all).

This is a 3 Player real world game where the card deck is stored digitally. 2 Players each take turns randomly "drawing cards" from the deck.

1. The first card each of the 2 players draws will reveals the fighter they represent.
2. The second card they each choose will reveal any superpowers their character might have attained in their lifetime.
3. The third card chosen by each will reveal any weapons they that may be at their disposal for this particular battle.
4. An optional fourth card drawn will decide the location of the battle.

The 3rd Player will act as the adjudicator. If there are any queries as to the nature of the characters or their attributes, the judge is to be approached for clarification. All interpretations are at the judges discretion and the judges decision is final.

1. Both Player 1 and 2 each have a minute to introduce their characters.
2. They then each have a minute to make their case for their characters offensive abilities.
3. Now they each have a minute to make a case for their characters defensive capabilities, taking into account their opponents offensive.
4. Finally they have 30 seconds each to add final thoughts and convince the judge of their battle superiority.

The judge delivers their final verdict and a winner is chosen.

## Development Tutorial
This game was developed for 2 reasons.
1. There's never a deck handy when one was needed.
2. As a very basic web app tutorial for anyone learning to code for the first time.

### Git
The project uses git for managing version control and collaboration. All files are hosted under https://www.github.com/goodwilltyping/OpenFight.

Grab the project either by forking it on Github, or cloning the project directly to your local machine. Clone with a simple GUI (graphical user interface) by installing https://desktop.github.com/ or by using the CLI (command line interface) directly.

Create a nice workspace directory for yourself:
```
> cd
> mkdir Workspace
> cd ./Workspace
```

Clone the project into your new workspace directory:
```
> git clone git@github.com:goodwilltyping/OpenFight.git
```

Create new files and edit them in your favourite text editor then **add** them to the git project and **commit** your changes, adding a nice decriptive message for future reference:
```CLI
> git add .
> git commit -m "Made the layout nicer"
```

Now if you're a collaborator, **push** your changes back to the project:
```
> git push
```

If you're not directly collaborating on the project see Github's [help files](https://help.github.com/articles/using-pull-requests/) on creating a **fork** of a project and performing pull requests.

Remember to always **pull** (not the same as the "pull request" mentioned above) from Github to get the latest changes from other users before you begin developing.
```
> git pull
```

#### Branching
If you would like to experiment with your code without making changes to the **master branch**, then create your own little side branch, let's give it the example name 'populate_all_button':
```
> git checkout -b populate_all_button
```

If your experiment worked out and you want to include it in the main project then commit your changes, switch back to master and merge your branch in with the master:
```
> git checkout master
> git merge populate_all_button
```

Now if you're not likely to ever use that branch again, delete it:
```
> git branch -d populate_all_button
```

Finally, a quick way to check which branches exist and switch to the one you want to work in, use:
```
> git branch
    button_test
    new_feature
    the_one_i_want
  * master
> git checkout the_one_i_want
```

See a nice development model using the methodology of [git-flow](http://nvie.com/posts/a-successful-git-branching-model/).

#### Tagging
Let's say that we've reached a significant milestone. Version 1 of the project is ready and we want to preserve that that state forever, while still continuing on with development toward Version 2. All we need to do is tag the specific commit that marks the last point in the development of version 1 and add a message describing the release:
```
> git tag -a v1.0 -m 'Version 1.0 working release'
```

To see all tags created in this project, type:
```
> git tag
```

To see the data for a specific tag, type:
```
> git show v1.0
```

### Text editing
Any text editor can be used, e.g. Notepad. But something with a bit more power is recommended, e.g. Notepad++. Other popular editors that include the features we want for coding include Sublime, vim or Atom.

Let's use Atom by downloading and installing from https://atom.io

Now open the project folder we want to work in, e.g. Workspace/OpenFight/

#### Atom
Atom has some nice default packages, but I recommend installing the following community packages from Atom > Preferences > +Install.
* [minimap](https://atom.io/packages/minimap) - *Adds a minimap of the page you're editing near the scrollbar on the right.*
* [highlight-selected](https://atom.io/packages/highlight-selected) - *Highlights all instances of the current word when selecting by double-clicking.*
* [git-control](https://atom.io/packages/git-control) - *Adds a GUI control for performing git commands within the open project.*
* [split-diff](https://atom.io/packages/split-diff) - *Allows merge conflicts to be seen in split-screen mode while highlighting the differences.*
* [autoclose-html](https://atom.io/packages/autoclose-html) - *automatically creates the correct closing tag when an opening tag is typed into HTML.*

### HTML, CSS and Javascript
This project is very basic and v 1.0 does not a require a webserver installed locally for development. Just opening *index.html* in your browser is sufficient.

* **index.html** - *Basic HTML5 template and is responsible for page layout.*
* **css/styles.css** - *Advanced layout control and definitions for tag/text colours and styling.*
* **js/openfight.js** - *Core APP for loading database object files (stored in JSON files) and randomly selecting cards from the deck*

## LICENSE
This project has been created for educational purposes and is free and open source under the standard MIT License.
