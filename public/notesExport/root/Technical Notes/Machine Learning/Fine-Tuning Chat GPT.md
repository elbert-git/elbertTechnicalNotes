# Fine-Tuning Chat GPT
Fine tuning chat gpt
--------------------

**Sources**  
\- https://www.youtube.com/watch?v=5vvtohsuo6A  
\## In general  
Fine-tuning is basically a better way of customising chatgpt. Achieving the same results of pre-prompting but without the extra tokens every time. It also achieves a better level of control as you can even tune it to respond in json or other structured outpus

How to fine tune
----------------

### Preparing the Dataset

You basically have to prepare a .jsonl like this  
note: .jsonl is basically a list of json objects in one file

```text-plain
{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "What's the capital of France?"}, {"role": "assistant", "content": "Paris, as if everyone doesn't know that already."}]}
{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "Who wrote 'Romeo and Juliet'?"}, {"role": "assistant", "content": "Oh, just some guy named William Shakespeare. Ever heard of him?"}]}
{"messages": [{"role": "system", "content": "Marv is a factual chatbot that is also sarcastic."}, {"role": "user", "content": "How far is the Moon from Earth?"}, {"role": "assistant", "content": "Around 384,400 kilometers. Give or take a few, like that really matters."}]}
```

### Tuning the model

upload the training file

```text-plain
import fs from 'fs';
import fetch from 'node-fetch';
import OpenAI, { toFile } from 'openai';

const openai = new OpenAI();

// If you have access to Node fs we recommend using fs.createReadStream():
await openai.files.create({ file: fs.createReadStream('mydata.jsonl'), purpose: 'fine-tune' });
```

Start the training

```text-plain
const fineTune = await openai.fineTuning.jobs.create({ training_file: 'file-abc123', model: 'gpt-3.5-turbo' })
```

### Listening to the training status

```text-plain
# List 10 fine-tuning jobs
let page = await openai.fineTuning.jobs.list({ limit: 10 });

# Retrieve the state of a fine-tune
let fineTune = await openai.fineTuning.jobs.retrieve('ftjob-abc123');

# Cancel a job
let status = await openai.fineTuning.jobs.cancel('ftjob-abc123');

# List up to 10 events from a fine-tuning job
let events = await openai.fineTuning.jobs.listEvents(fineTune.id, { limit: 10 });

# Delete a fine-tuned model (must be an owner of the org the model was created in)
let model = await openai.models.delete('ft:gpt-3.5-turbo:acemeco:suffix:abc123')
```

Using the fine tuned model
--------------------------

Similar to using the main models, just switch the model

```text-plain
async function main() {
 const completion = await openai.chat.completions.create({
   messages: [{ role: "system", content: "You are a helpful assistant." }],
   model: "ft:gpt-3.5-turbo:my-org:custom_suffix:id",
 });
 console.log(completion.choices[0]);
}
main();
```

Other LLMs
----------

you can also train other llms like ollama  
https://www.youtube.com/watch?v=74NSDMvYZ9Y  
https://www.youtube.com/watch?v=3fsn19OI\_C8