# Custom Activities
Repo for custom activities used in IU Quick Check. Custom activities are located in Quick Check's public/customActivities folder. They are ignored in git in Quick Check, so that they can be independently updated in this repo. The reasoning behind this is that these activities are closer to content than they are to actual functionality in the Quick Check app, and so creating a hotfix in the Quick Check repo whenever a custom activity is updated is not an ideal solution compared to a separate repo.

## Construct 2 exports
Within each Construct 2 activity's folder, there is the original source .capx file, as well as a C2export folder that contains the exported html/js files.

When copying the export files from windows to mac, sometimes permissions get wonky. It's best to run the following command on the C2export folder after copying: `chmod -R 755 C2export`

## Construct 2 Plugin and data tracking via Quick Check

We have created a Construct 2 plugin to facilitate consistent attempt/response tracking across multiple Construct 2 activities. (Previously, updates to this mechanism required copying and pasting changes across all Construct 2 activities, which made the chances of making a mistake and introducing a bug much more common, in addition to being a more time-consuming process in general.) The Construct 2 plugin (located in plugins/edsdata) needs to be copied wholesale into the Windows environment where Construct 2 is being run in order to be loaded into the activity. The edsdata directory needs to be copied into: `C:/Program Files/Construct 2/exporters/html5/plugins`.

Whenever changes are made to the plugin, the files need to be copied to the folder above, and any currently open Construct 2 activities must be restarted for the changes to take effect. Construct 2 activities do not necessarily have to be re-exported whenever the plugin is updated, if the changes do not have a direct effect on the activities. If the changes to the plugin are necessary for the activity to run, then the activities do have to be re-exported so the new changes are bundled into the export files.

Data-tracking across all custom activities is centralized to a single file, which contains a CustomActivityData js object. It is located in plugins/edsdata/customActivityData.js. Although it might seem a little odd that plain javascript activities outside of Construct 2 are relying on a file in the plugin folder, it is a necessary evil because all javascript file dependencies for a Construct 2 plugin MUST be located in the same folder. They cannot be linked in from elsewhere. Because plain javascript activities in an html file CAN load an externally located js file, they are the ones that have to rely on a dependency in the plugins folder. We decided this would be a better strategy than having the same file copied in multiple places, which would be prone to error if a dev forgot to make the copy.

A minor oddity in the data file: Construct 2's google closure compiling process when exporting a file for some reason trips over nested data objects, unless they are written in bracket notation. So `this.customActivityData.attemptId` is undefined in runtime, but `this.customActivityData['attemptId']` works. Really bizarre, and wasn't able to find much information online regarding this problem, unfortunately.

The Construct 2 plugin relies on each activity having the same variables defined (countCorrect, countIncorrect, etc.) in order to automatically populate the parameters field when making a request. Other variable names could be used, but it would require making changes to the default parameters. The parameters field is a JSON string, which makes the plugin as flexible as possible for edge cases where some parameters need to be omitted or added.

Bootstrap error modals are automatically appended to the html body and displayed if an error occurs. These can function independently of the Construct 2 activities.

## License
Custom Activities is open-sourced software licensed under the [Educational Community License, Version 2.0](https://opensource.org/licenses/ECL-2.0).

Copyright 2019 The Trustees of Indiana University Licensed under the
  Educational Community License, Version 2.0 (the "License"); you may
  not use this file except in compliance with the License. You may
  obtain a copy of the License at

http://www.osedu.org/licenses/ECL-2.0

  Unless required by applicable law or agreed to in writing,
  software distributed under the License is distributed on an "AS IS"
  BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
  or implied. See the License for the specific language governing
  permissions and limitations under the License.