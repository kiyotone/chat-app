from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
import json

# Create your views here.




def main(request):
    return HttpResponse("Response")

def get(request):
    print(request)
    data = [
        {
            "id": 1,
            "name": "John"
        },
        {
            "id": 2,
            "name": "Jhin"
        },
        
    ]

    return JsonResponse({'data': data})

def post(request):
    input_data = json.loads(request.body)
    print(input_data)
    data = {
            "content": get_response(input_data,"hello"),
            "sender": "BOT",
        }

    return JsonResponse({'data': data})




def get_response(input_data,task):
    if task == "hello":
        return "Hello " + input_data["sender"]