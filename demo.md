# Feature Name

## Summary
{/* Feel free to type up a summary of your feature here! */}

## Porting this Feature

### Dependencies:

If this feature requires any features to function properly, they will be listed here.

{/* If you want to declare that your feature requires a different feature in order to function (for example, an API library, or a species), uncomment the following: */}

{/* This feature requires the following dependencies:

- [My Feature](./feature-link) */}

{/* DO NOT EDIT ANYTHING BELOW THIS LINE UNLESS YOU KNOW WHAT YOURE DOING! This will be updated automatically. */}

### Files Changed:

<details>
<summary>This feature changes the following files: (click to expand)</summary>

````
- file.yml
- resources/yay/file.yml
````

</details>

### Relevant PRs:
The following pull requests have made changes to this feature:

- Link 1
- Link 2

### Porting Instructions:
These instructions assume you have an existing local remote of Macrocosm under the name `macrocosm`.

If you haven't set up a remote yet, then you can do so by pasting the following into your terminal:

```
git remote add macrocosm https://github.com/syndicate-ss14/macrocosm.git
git fetch macrocosm
```
**Make sure you have switched onto a new, empty branch, and that your working tree is clear.** Then paste the following into your terminal:
`````
git checkout macrocosm/master file.yml
git checkout macrocosm/master resources/yay/file.yml

git commit -m "Feature Name
> 
> Original PR(s):
> - Link 1
> - Link 2
`````