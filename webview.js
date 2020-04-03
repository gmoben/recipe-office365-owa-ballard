module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const unreadMail = jQuery('[aria-label="Folder Pane"] [title=Inbox] ~ [autoid]').text();
        Franz.setBadge(unreadMail);
    };
    Franz.loop(getMessages);
};
