'use strict'

class ContactController {
    receiveForm({ request }) {
        console.log(request.post());
    }
}

module.exports = ContactController
