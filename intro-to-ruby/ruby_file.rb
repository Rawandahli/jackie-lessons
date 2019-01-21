puts "Ruby is running!!"

# STRING METHODS

# capitalize
puts "masarah".capitalize
puts "masarah".upcase
puts "MASARAH".downcase

# start_with?
puts "trevor".start_with?('t') #true

# include?
puts "trevor".include?('or') #true
puts "trevor".include?('cool') #false

# NUMBER METHODS

# times
2.times do |num|
  puts num 
end

# downto
10.downto(4) do |index|
  puts "down to index: #{index}"
end

# to_i  ,  to_f
puts "3".to_i.class #to_i => integer
puts "3".to_f #to_f => float

## .class
puts "this is a string".class
hash = {:a => "b"}
hash = {a: "b"}
puts hash.class

# HASH METHODS

# has_key?
hash = {
  name: "Jackie",
  age: 209
}
puts hash.has_key?(:name) #true 
puts hash.has_key?(:height) #false

# accessing hashes
puts hash[:name] # "Jackie"

# keep_if 
hash = {
  person1: "Trevor",
  person2: "Jackie"
}

new_hash = hash.keep_if do |key, value|
  key.to_s.include?("2")
end

puts new_hash

# merge
first_hash = {
  name: "Jackie",
  age: 209
}

second_hash = {
  height: "6'2",
  name: "Trevor"
}
merged_hash = first_hash.merge(second_hash)
puts merged_hash

# ARRAY METHODS

# concat
first_array = ["fish", "cat"]
second_array = ["dog"]

concated_array = first_array.concat(second_array)

puts concated_array.inspect
puts "FIRST ARRAY AFTER CONCAT:"
puts first_array.inspect

another_concat = first_array + second_array 
puts another_concat.inspect

# <<
first_array << "turtle"
puts first_array.inspect

# select 
numbers = [1, 3, 7, 4, 2, 9]

numbers.select{|number| number.even?}

even_numbers = numbers.select do |number|
  number.even?
end

puts even_numbers.inspect

# reject
odd_numbers = numbers.reject{|number| number.even?}
puts odd_numbers.inspect

# sample
teachers = ["Jackie", "Ghadeer", "Trevor"]
puts teachers.sample
puts teachers.sample
puts teachers.sample

# empty?
array = [1,2,3]
puts array.empty?
puts "".empty?

# accessing array values
array = [1,2,3,4,5,6]
puts array[0]
puts array[-2]

# sort
array = ["banana", "apple", "grape"]
puts array.sort.inspect
puts array.sort.reverse.inspect

length_sorted = array.sort do |a,b|
  # puts a.length <=> b.length
  a.length <=> b.length
end

puts length_sorted.inspect

# collect 
array = [1,2,3]
new_array = array.collect{|number| number * 2}
puts new_array.inspect

# each_index
array.each_index do |index|
  puts "Index is #{index}"
  puts "value is #{array[index]}"
end

# each 
array.each do |element|
  puts "element is: #{element}"
end

# compact 
array = [2, 6, 8, nil, 2, 3, nil, 2, 2, 8, 6]
puts array.compact.inspect

# uniq
puts array.compact.uniq.inspect

# !
name = "Jackie"
puts name.upcase 
puts name

name.upcase!
puts name

# ranges
puts (1..10).to_a.inspect
puts (1...10).to_a.inspect

puts ('a'..'z').to_a.inspect

one_to_ten = (1..10)

# random within a range
puts rand(1..10)




