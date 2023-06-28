const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    const { orderBy } = req.query;
    const categories = await CategoryRepository.findAll(orderBy);

    res.json(categories);
  }

  async show(req, res) {
    const category = await CategoryRepository.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    res.json(category);
  }

  async store(req, res) {
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findByName(name);

    if (categoryExists) {
      return res.status(400).json({ error: 'This name is already in use' });
    }

    return res.status(201).json(
      await CategoryRepository.create({ name }),
    );
  }

  async update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required' });
    }

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      return res.status(404).json({ error: 'Category not found' });
    }

    const categoryByName = await CategoryRepository.findByName(name);

    if (categoryByName && categoryByName.id !== id) {
      return res.status(400).json({ error: 'This name is already in use' });
    }

    const updatedCategory = await CategoryRepository.update(id, { name });

    res.json(updatedCategory);
  }

  async delete(req, res) {
    await CategoryRepository.delete(req.params.id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
