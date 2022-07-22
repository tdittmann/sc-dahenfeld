import {FeedbackJson} from './feedbackJson.model';
import {Feedback} from '../../core/domain/feedback.model';

export class FeedbackMapper {

    mapFrom(param: FeedbackJson): Feedback {
        if (!param) {
            return null;
        }

        const feedback = new Feedback();
        feedback.title = param.title;
        feedback.text = param.text;
        feedback.link = param.link;
        feedback.buttonText = param.buttonText;
        return feedback;
    }

}
