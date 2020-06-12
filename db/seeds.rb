# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Account.create([
  {first_name: "Sarah", last_name: "Smith", username: "sarahhh", email: "sarahsmith@gmail.com", password: "password1"},
  {first_name: "Mary", last_name: "Jones", username: "maire", email: "maryj@gmail.com", password: "password2"},
  {first_name: "Jason", last_name: "Hunter", username: "jayjay", email: "jhunter@gmail.com", password: "password3"},
  {first_name: "Frank", last_name: "Boyle", username: "boyleboils", email: "frfrfrank@gmail.com", password: "password4"},
  {first_name: "Alex", last_name: "Francis", username: "francis.alex", email: "alex.francis@gmail.com", password: "password5"}
  ])
