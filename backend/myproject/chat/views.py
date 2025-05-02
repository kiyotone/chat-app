from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.db.models import F
from .models import Message

@csrf_exempt
def previous_chats(request):
    if request.method == 'GET':
        # Retrieve group_name from query parameters
        group_name = request.GET.get('group_name')
        
        if not group_name:
            return JsonResponse({'error': 'Missing group_name'}, status=400)

        # Filter messages by group name and use unique aliases for fields
        messages = Message.objects.filter(
            group__name=group_name
        ).values(
            sender_username=F('sender__username'),
            message_text=F('content'),  # Rename 'content' to 'message_text'
            message_time=F('timestamp')  # Rename 'timestamp' to 'message_time'
        ).order_by('timestamp')
        
        messages = [
            {
                'sender': message['sender_username'],
                'message': message['message_text'],
                'timestamp': message['message_time'].strftime('%Y-%m-%d %H:%M:%S')  # Format timestamp
            }
            for message in messages
        ]

        return JsonResponse(list(messages), safe=False, status=200)

    return JsonResponse({'error': 'Method not allowed'}, status=405)
