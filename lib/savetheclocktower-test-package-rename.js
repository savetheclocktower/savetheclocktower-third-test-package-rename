'use babel';

import SavetheclocktowerTestPackageRenameView from './savetheclocktower-test-package-rename-view';
import { CompositeDisposable } from 'atom';

export default {

  savetheclocktowerTestPackageRenameView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.savetheclocktowerTestPackageRenameView = new SavetheclocktowerTestPackageRenameView(state.savetheclocktowerTestPackageRenameViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.savetheclocktowerTestPackageRenameView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'savetheclocktower-test-package-rename:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.savetheclocktowerTestPackageRenameView.destroy();
  },

  serialize() {
    return {
      savetheclocktowerTestPackageRenameViewState: this.savetheclocktowerTestPackageRenameView.serialize()
    };
  },

  toggle() {
    console.log('SavetheclocktowerTestPackageRename was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
