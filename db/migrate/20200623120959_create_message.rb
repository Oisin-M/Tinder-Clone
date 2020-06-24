class CreateMessage < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.references :conversation, null: false, foreign_key: true
      t.references :account, null: false, foreign_key: true
      t.text :body
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
