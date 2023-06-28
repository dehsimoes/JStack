const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    const { orderBy } = req.query;
    const contacts = await ContactRepository.findAll(orderBy);

    res.json(contacts);
  }

  async show(req, res) {
    const contact = await ContactRepository.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
  }

  async store(req, res) {
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return res.status(400).json({ error: 'This email is already in use' });
    }

    return res.status(201).json(
      await ContactRepository.create({
        name, email, phone, category_id,
      }),
    );
  }

  async update(req, res) {
    const { id } = req.params;
    const {
      name, email, phone, category_id,
    } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);

    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'This email is already in use' });
    }

    const updatedContact = await ContactRepository.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    res.json(updatedContact);
  }

  async delete(req, res) {
    await ContactRepository.delete(req.params.id);

    res.sendStatus(204);
  }
}

module.exports = new ContactController();
