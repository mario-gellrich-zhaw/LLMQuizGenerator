<template>
  <v-card
    subtitle="Example prompt"
    text=""
    variant="outlined"
    class="pa-5"
    color="cyan-lighten-4"
  >
    Create two 'multiple choice single answer' questions for each topic listed
    below. In total these must be 30 questions. This Limit cannot be exceeded,
    even if there are more topics. In that case just choose at random! <br />
    Create 5 options for each question. The difficulty must be at an advanced to
    professional level. It should take about one minute to answer the question.
    <br />
    Also generate a generic title for the quiz. <br />
    <br />
    Use the following structure: question, code, options, answer, and topic.

    <v-card class="pa-3 mt-2 mb-2" variant="outlined" color="grey-darken-1">
      <p>{</p>
      <p class="ml-1">title = ' '</p>
      <p class="ml-1">questions = [</p>
      <p class="ml-2">{</p>
      <p class="ml-10">'question': ' ',</p>
      <p class="ml-10">'code': ' ',</p>
      <p class="ml-10">'options': [' ', ' ', ' ', ' ', ' '],</p>
      <p class="ml-10">'answer': ' ',</p>
      <p class="ml-10">'topic': ' '</p>
      <p class="ml-2">}</p>
      <p class="ml-1">]</p>
      <p>}</p>
    </v-card>
    <p>Here are the topics:</p>
    <ul class="ml-6">
      <li>Python Data Types</li>
      <li>Python Operators</li>
      <li>Python Lists Python Dictionaries</li>
      <li>Python If...Else</li>
      <li>Python For Loops</li>
      <li>Python Functions</li>
      <li>Python Lambda</li>
      <li>Python Classes</li>
      <li>Python Dates</li>
      <li>Python Math</li>
      <li>Python RegEx</li>
      <li>Python String Formatting</li>
      <li>Python Pandas Data Frames</li>
      <li>Python sqlite3</li>
    </ul>
  </v-card>
</template>

<style></style>
